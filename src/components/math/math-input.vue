<!--
  fancy math input box for special equations
 -->

<style>
  @import "../../../deps/mathquill/mathquill.css";

  /* container styling so that the keyboard can be positioned without overflow */
  .math-input-container {
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 0;
  }

  .math-input {
    font-size: 14pt;
    min-width: 300px;
    padding: 5px 4px 5px 4px;
    margin: 5px;
    border-radius: 3px;
    border-color: lightgrey;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    background-color: white;
  }

  /*.mq-focused {
    box-shadow: none !important;
  }
  .mq-editable-field {
    border: none !important;
  }*/
  .math-container .mq-cursor {
    display: none !important;
  }
  .input-wrong {
    border: 3px solid tomato !important;
  }
  .input-correct {
    border: 3px solid lightgreen !important;
  }
</style>

<template>
  <span class="math-input-container">
    <!--
      - answer can be empty and so can customSymbols
      - customSymbols is to provide a manual override in what rows the keyboard can display
      - customSymbols MUST be a 2d array with each sub-array containing individual rows eg...
        [
          ['sym 1', 'sym 2', ...], // row 1
          // etc
        ]
     -->
    <keyboard v-if="!noKeyboard" :latex="answer" :custom-symbols="symbols" :kbActive="kbActive"></keyboard>
    <span class="math-input"
          :class="[{ 'input-correct': correct, 'input-wrong': correct !== undefined && !correct && submitted }]"
          @click="$broadcast('show-keyboard')"></span>

  </span>
</template>

<script>
  import { setLatex } from './latex-table'
  import keyboard from './keyboard.vue'

  document.addEventListener('click', e => {

  })

  export default {
    // answer can be a single string or an array of equations
    props: ['latex', 'answer', 'symbols', 'correct', 'noKeyboard', 'ansId'],
    data() {
      return {
        math: null,
        answer:  this.answer  || '',
        symbols: this.symbols || '',
        submitted: false
      }
    },
    ready() {
      this.math = window.MQ.MathField(this.$el.getElementsByClassName('math-input')[0], {
        substituteTextarea: () => {
          let ta = document.createElement('textarea')
          // hide keyboard
          ta.onblur = (e) => {
            if(this.kbHover) {
              this.math.focus()
              return false
            } else {
              this.$broadcast('hide-keyboard')
            }
          }
          return ta
        },
        handlers: {
          edit: () => {
            // make mq latex input reactive
            this.latex = this.math.latex() || ''
          }
        }
      })
    },
    computed: {
      isWrong() {
        if(typeof this.correct !== 'undefined')
          return !this.correct
        else
          return false
      }
    },
    methods: {
      // insert wrapped latex into the input box so that its treated as an
      // individual atomic unit whose content cannot be edited
      insertWrappedMath(latex) {
        // add the latex string to the latex-table so that the mathquill
        // embed callback can pull it out and embed it into a new span
        // whose id is 'math-container-{id}'
        let id = setLatex(latex)

        this.math.write('\\embed{container}[' + id + ']')
        window.MQ.StaticMath(document.getElementById('math-container-' + id))
        this.math.focus()
      }
    },
    events: {
      // sub-q was changed or box needs to be forced cleared
      'clear-math': function() {
        this.math.latex('')
        this.submitted = false
      },
      // user clicked a token which is wrapped latex
      'math-token': function(token) {
        this.insertWrappedMath(token)
      },
      // user clicked a plain old operator that can trivially be inserted into
      // the input
      'math-operator': function(op) {
        this.math.cmd(op)
        this.math.focus()
      },
      'submit': function() {
        this.submitted = true
      },
      'kb-in': function() {
        this.kbHover = true
      },
      'kb-out': function() {
        this.kbHover = false
      },
      'show-answer': function(/* opt */ id) {
        if(id === undefined || this.ansId === id) {
          this.math.latex(this.answer)
        }
      }
    },
    components: {
      keyboard
    }
  }

</script>
