<!--
  lesson sidebar to select subquestions
 -->

<style>
  .lesson-sidebar {
    max-width: 200px;
    margin-right: 20px;
  }
  .question-item:hover {
    cursor: pointer;
    /*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  }
  .current-q {
    background-color: #f4f4f4 !important;
    font-weight: bold;
    box-shadow: inset 0 0 1em rgba(0, 0, 0, .07);
    transform: none !important;
  }
  .current-q:hover {
    cursor: default;
  }

  .hov { transition: all .08s ease-out; }
  .hov:hover {
    transform: translateX(-5px);
    z-index: 1000;
  }
</style>

<template>
  <div class="lesson-sidebar">
    <section class="list-group">
      <h4 class="list-group-item hvu-list-head">Questions</h4>

      <a v-for="question in listing"
         track-by="$index"
         class="list-group-item question-item hov"
         @mouseover="preload(question.id)"
         :class="[{ 'current-q': selected === $index }]"
         @click="selectQuestion($index, question.id)">
         {{question.id}}
      </a>
    </section>
  </div>
</template>

<script>
  import preloadImg from './helper/preload'

  export default {
    props: ['lid', 'listing'],
    data() {
      return {
        selected: 0
      }
    },
    methods: {
      selectQuestion(id, qid) {
        this.selected = id
        this.$dispatch('sidebar-change-question', qid)
      },
      preload(qid) {
        preloadImg('/static/diagrams/' + qid + '.png')

      }
    },
    vuex: {
      getters: {
        lessons: state => state.lessons
      }
    }
  }
</script>
<!--v-link="{ path: `/lesson/${lid}/${question.id}` }"-->
