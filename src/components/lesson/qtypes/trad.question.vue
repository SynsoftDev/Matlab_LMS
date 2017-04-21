<!--
  traditional question

  this is the simplest quesiton type in the HVU EE application
 -->

<style>
  .subquestion {
    margin-left: 200px;
  }
  .user-input {
    max-width: 350px;
    margin-bottom: 5px;
  }
  .q-content {
    padding-top: 15px;
  }
  .fig {
    margin: 15px 0 5px 0;
  }
  .q-prompt {
    margin: 10px 0 5px 0;
  }
  .q-hint {
    margin-bottom: 5px !important;
    width: 350px;
  }
  .trad-input {
    min-width: 315px !important;
  }
</style>

<template>
  <section class="q-content" v-bind:class="[isSub ? subquestion : subquestion]">
    <h4>Question {{data.title}}</h4>
    <img class="fig center-block" v-if="data.image" :src="'/static/diagrams/' + data.image"></img>
    <p class="q-prompt">{{data.prompt}}</p>

    <div class="q-space" v-if="data.questionType">
      <div v-if="data.questionType === 'inputbox'">
        <div class="number input-group q-input user-input">
          <input type="text" class="form-control trad-input" v-model="userAnswer" placeholder="Enter Answer" />
          <span v-show="data.units" class="input-group-addon" id="basic-addon2">{{data.units}}</span>
        </div>
      </div>

      <div v-if="data.questionType === 'dropdown'">
        <select class="user-input form-control" v-model='userAnswer'>
          <option v-for="option in data.questionOptions">
            {{ option }}
          </option>
        </select>
      </div>

      <submit :on-submit="onSubmit"
              :on-give-up="onGiveUp"
              :hint="hint"></submit>
    </div>

    <div v-for="sub in data.subQuestions">
      <trad-question :sub="sub"
                     :is-sub="true"></trad-question>
    </div>
  </section>
</template>

<script>
  import submit from '../helper/submit.vue'

  export default {
    name: 'TradQuestion',
    props: ['isSub', 'sub'],
    data() {
      return {
        showHint: false,
        isCorrect: false,
        userAnswer: '',
        isSubQ: this.isSub
      }
    },
    computed: {
      hint() {
        return this.data.hint
      },
      // use store's currentQuestion or the sub prop
      // depending on if question is a subQuestion or not
      data() {
        return this.isSubQ ? this.sub : this.currentQuestion
      }
    },
    methods: {
      onSubmit() {
        if(!this.userAnswer) {
          this.userAnswer = ''
        }

        return {
          title: this.data.title,
          userAnswers: this.userAnswer
        }
      },
      onGiveUp() {
        this.userAnswer = this.data.answers[0]
      }
    },
    route: { canReuse: false },
    vuex: {
      getters: {
        currentQuestion: state => state.currentQuestion
      }
    },
    components: {
      submit
    }
  }
</script>
