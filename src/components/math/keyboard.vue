<!--
  keyboard component that is tightly coupled to math-input.vue
 -->

<style>
  .keyboard {
    background-color: #fcfcfc;
    border: 1px solid lightgrey;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    max-width: 300px;

    margin: 0; padding: 0;

    /*position: absolute;
    opacity: 0.9;
    bottom: 25px;
    right: 9px;
    z-index: -10;*/
  }
  .keyboard-row {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .keyboard-button {
    display: inline;
  }
  .keyboard-button:hover, .keyboard-math:hover {
    cursor: pointer;
    color: black;
    font-weight: bold;
  }
  .keyboard-math {
    font-size: 12pt !important;
    /*color: #777;*/
    user-select: none;
  }
</style>

<template>
  <div class="keyboard"
       v-if="show"
       @mouseenter="$dispatch('kb-in')"
       @mouseleave="$dispatch('kb-out')">
    <!-- operators -->
    <ul class="keyboard-row">
      <li class="keyboard-button" v-for="op in operators" @click="opPressed(op[0])">
        <math-static class="keyboard-math" :latex="op[1] || op[0]"></math-static>
      </li>
    </ul>

    <!-- equation variables -->
    <ul class="keyboard-row">
      <li class="keyboard-button" v-for="tok in tokens" @click="tokenPressed(tok)">
        <math-static class="keyboard-math" :latex="tok"></math-static>
      </li>
    </ul>

    <!-- customSymbol rows -->
    <ul class="keyboard-row" v-for="row in customSymbols">
      <li class="keyboard-button" v-for="sym in row" @click="tokenPressed(sym)">
        <math-static class="keyboard-math" :latex="sym"></math-static>
      </li>
    </ul>
  </div>
</template>

<script>
  import mathStatic from './math-static.vue'

  const operators = [['+'], ['-'], ['\\cdot'], ['\\frac', '\\frac{x}{y}'], ['\\sqrt', '\\sqrt{x}'], ['\\pi']]

  // cache to hold latex string/array[s] so that the slow tokenizing process
  // doesnt have to be repeated every time for the same (sub)question
  let cache = Object.create(null)

  // TODO?: potentially centralize storage of cache into the latex-table
  const equationVars = /[iIV]_[A-Z1-9]|R_[1-9]/g
  function tokenize(latex) {
    if(latex in cache) {
      return cache[latex]
    }

    let tokens = []

    // accept a single equation or an array of them
    typeof latex === 'string' && (latex = [latex])
    // build list of keyboard tokens from array of equations
    latex.forEach(l => tokens = tokens.concat(l.match(equationVars)))
    // dedup token list and sort for keyboard display
    let ret = tokens.filter((item, pos) => item && tokens.indexOf(item) === pos).sort()
    cache[latex] = ret
    return ret
  }

  export default {
    props: ['latex', 'customSymbols'],
    data() {
      return {
        show: false,
        operators
      }
    },
    computed: {
      tokens() {
        return tokenize(this.latex)
      }
    },
    methods: {
      tokenPressed(token) {
        this.$dispatch('math-token', token)
      },
      opPressed(operator) {
        this.$dispatch('math-operator', operator)
      }
    },
    events: {
      'show-keyboard': function() {
        this.show = true
      },
      'hide-keyboard': function() {
        this.show = false
      }
    },
    components: {
      mathStatic
    }
  }
</script>
