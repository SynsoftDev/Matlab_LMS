<!--
  the units display for the class page - this is subject to change
  as the class page changes and the users might not want to see every single
  unit that they could possible visit
 -->

<style>
  .units {
    max-width: 300px;
  }
  .unit-learn {
    margin: 0;
    padding: 0;
  }
  .test {
    padding: 0 !important;
  }
</style>

<template>
  <div class="units">
    <h3 class="unit-learn text-center">Practice</h3>
    <!-- <accordion class="list-group">
      <panel v-for="unit in units" :header="unit.name" :is-open="true">
        <a class="list-group-item"
           v-for="lesson in unit.lessons"
           v-link="{name: 'lesson', params: {lid: lesson}}">
           Lesson {{lesson}}
        </a>
      </panel>
    </accordion> -->

    <section class="list-group" v-for="unit in units">
      <h4 class="list-group-item hvu-list-head">{{unit.name}}</h4>

      <a class="list-group-item"
         @mouseover="preload(lesson)"
         v-for="lesson in unit.lessons"
         v-link="{name: 'lesson', params: {lid: lesson}}">
         Lesson {{lesson}}
      </a>
    </section>
  </div>
</template>

<script>
  // import { accordion, panel } from 'vue-strap'
  import config from '../../config'
  import { getLesson } from '../../vuex/actions'
  import preloadImg from '../lesson/helper/preload'

  export default {
    props: ['units'],
    components: {
      // accordion, panel
    },
    methods: {
      preload(lesson) {
        if(config.preload) {
          preloadImg('/static/diagrams/' + lesson + '.1.png')
          this.getLesson(lesson)
        }
      }
    },
    vuex: {
      actions: {
        getLesson
      }
    }
  }
</script>
