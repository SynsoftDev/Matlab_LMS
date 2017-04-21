<!--
  lesson container component

  an anonymous component is used to display the correct question type determined
  from the json lesson listing response
 -->

<style>
  .next-buttons {
    margin-top: 20px;
  }
  .lesson-title {
    margin: 0; padding: 0;
    color: grey;
  }
  .lesson-content {
    padding: 10px 0 0 10px !important;
  }
  .lesson-info-button {
    float: right;
  }
  .lesson-info-content {
    padding: 10px;
  }
</style>

<template>
  <div class="lesson-view">
    <header class="panel-heading">
      <div class="row">
        <div class="col-md-6">
          <h3>Lesson {{lid}}</h3>
          <p class="lesson-title">{{titleText}}</p>
        </div>

        <div class="col-md-6">
          <dropdown class="lesson-info-button" text="Related Materials">
            <div class="lesson-info-content">
              <p>more information will go here </p>
            </div>
          </dropdown>
        </div>
      </div>
    </header>

    <div class="lesson-content">
      <sidebar class="col-md-3" :lid="lid" :listing="lessons[lid]"></sidebar>
      <!--<component class="col-md-8" :is="typeMap[qtype]" :data="currentQuestion" transition="fade"></component>-->
      <router-view class="col-md-8"></router-view>
    </div>
  </div>
</template>

<script>
  import sidebar from './sidebar.vue'
  import { getQuestion, setLesson } from '../../vuex/actions'
  import { dropdown } from 'vue-strap'

  export default {
    name: 'Lesson',
    data() {
      return {
        qid: 0,
        qtype: 0,
        lid: 0
      }
    },
    components: {
      sidebar,
      dropdown
    },
    vuex: {
      getters: {
        classData: state => state.classData,
        storeQuestions: state => state.questions,
        lessons: state => state.lessons,
        titleText: state => {
          // this is pretty nasty
          let [unit, less] = state.currentQuestion.title.split('.')
          return state.classData.units[+unit - 1].lessons[+less - 1].title
        }
      },
      actions: {
        getQuestion,
        setLesson
      }
    },
    route: {
      data({ to, next }) {
        let [lid, qid] = to.path.split('/').slice(2)
        if(!qid) {
          qid = lid + '.1'
        }
        this.fetchQuestion(qid, lid)
        this.changeQuestion()
        next()
      }
    },
    methods: {
      // extract lesson data out of the classData store object
      // so that it can subsequently be easily pulled down
      // from the api via changeQuestion
      fetchQuestion(qid, lid) {
        this.lid = lid;

        // question hasnt yet been fetched
        if(this.storeQuestions[qid] === undefined) {
          let unit = +lid.split('.').shift()

          let questions
          this.classData.units[unit - 1].lessons.forEach(e => {
            if(lid === e.lid) {
              questions = e.questions
            }
          })

          // TODO: maybe change the db schema to be an actual map instead of an
          // array in the future for constant lookup
          let curQuestion = 0
          for(var q = 0; q < questions.length; q++) {
            if(questions[q].id === qid) {
              this.qtype = questions[q].type
              this.qid = qid

              // set data sidebar pulls from
              this.setLesson(lid, questions)

              break
            }
          }

          if(!lid || !qid) {
            throw new Error('Invalid question type')
          }
        } else {
          // _type is an app-local tagging of the qtype for a question object
          // it's set when the q is fetched from any question endpoint
          // see mutations.js
          this.qtype = this.storeQuestions[qid]._type
          this.qid = qid
        }
      },
      // change the question by dispatching vuex action
      // which performs the actual network request
      changeQuestion() {
        this.getQuestion(this.qtype, this.qid)  // done regardless of prefetch...
      }
    },
    events: {
      'sidebar-change-question': function(qid) {
        let lid = qid.slice(0, qid.lastIndexOf('.'))
        this.fetchQuestion(qid, lid)
        this.changeQuestion()
        this.$router.go({ path: `/lesson/${lid}/${qid}` })
      }
    }
  }
</script>
