<!--
  static math display for equations that dont change
 -->

<style>
  .math-static {
    font-size: 14pt;
    margin: 5px;
  }
</style>

<template>
  <span class="math-static">{{latex}}</span>
</template>

<script>
  export default {
    props: ['latex', 'id'],
    data() {
      return {
        staticInst: null
      }
    },
    ready() {
      this.staticInst = MQ.StaticMath(this.$el)
    },
    events: {
      'transmit-latex': function() {
        this.$dispatch('static-latex',  { id: this.id, latex: this.staticInst.latex() })
      }
    }
  }
</script>
