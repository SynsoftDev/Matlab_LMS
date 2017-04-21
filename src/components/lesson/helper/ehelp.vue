<!--
  Extended help system used as a question tutorial
-->

<style>
  .ehelp-math {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
  .ehelp-sec > .math-input {
    min-width: 75px !important;
    margin: 0 !important;
  }
  .ehelp-text {
    margin-left: 5px;
    margin-bottom: 0;
  }
  .ehelp-row {
    margin-bottom: 10px;
  }
  .ehelp-row:last-child {
    margin-bottom: 0px;
  }
  .ehelp-submit {
    margin-left: 5px;
  }
  .ehelp-fig {
    margin-top: 0px;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  .ehelp-prompt {
    margin-left: 5px;
    margin-bottom: 8px;
  }
  .ehelp-set {
    /*border-bottom: 1px solid lightgrey;*/
    padding-bottom: 10px;
  }
  .ehelp-step {
    font-weight: bold;
    font-size: 11pt;
    margin-left: 5px;
  }
</style>

<template>
  <div class="ehelp">
    <aside :show.sync="show"
           placement="right"
           :header="(title || 'Help') + (completed ? ' (Complete)' : '')"
           :width="width || 400">

      <slot name="header"></slot>

      <div class="ehelp-set" v-for="($secNum, d) in json" v-show="nonProgressive || d.alwaysShow || showList[$secNum]">
        <h4 class="ehelp-step">Step {{$secNum + 1}}</h4>
        <img class="fig ehelp-fig" :src="'/static/diagrams/' + d.img" v-show="d.img"></img>
        <p class="ehelp-prompt" v-show="d.prompt">{{d.prompt}}</p>

        <div class="ehelp-row" v-for="($eNum, e) in d.equations">
          <p class="ehelp-text" v-show="e.prolog">{{e.prolog}}</p>

          <div class="ehelp-math">
            <div v-for="sec in e.math">
              <math-input class="ehelp-sec"
                          v-if="sec.input"
                          :latex.sync="hintInput[$secNum + '-' + $eNum + '-' + $index]"
                          :answer="sec.e"
                          :correct.sync="correctList[$secNum + '-' + $eNum + '-' + $index]"
                          :no-keyboard="true"
                          :ans-id="$secNum"></math-input>
              <math-static :latex="sec.e" v-else></math-static>
            </div>
          </div>

          <p class="ehelp-text" v-show="e.epilog">{{e.epilog}}</p>
        </div>

        <div v-if="!nonProgressive && !d.noSubmit">
          <submit class="ehelp-submit"
                  :on-submit="submitFnFactory($secNum)"
                  :on-give-up="onGiveUpFactory($secNum)"
                  :event-id="$secNum"</submit>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  import mathStatic from '../../math/math-static.vue'
  import mathInput from '../../math/math-input.vue'
  import submit from './submit.vue'
  import aside from './aside.vue'
  import { verifyQuestion } from '../../../api/'
  import { set } from 'vue'

  export default {
    name: 'ExtendedHelp',
    props: ['json', 'show', 'title', 'width', 'nonProgressive'],
    data() {
      return {
        hintInput: Object.create(null),
        correctList: Object.create(null),
        showList: [true],
      }
    },
    methods: {
      // return a function to submit a single help section associated
      // with a submit button
      submitFnFactory(id) {
        return (() => {
          // format for the /api/partial endpoint
          let answer = {
            key: {
              equations: []
            },
            user: {
              equations: []
            }
          }

          let input = Object.keys(this.hintInput)
          let filteredInput = []
          for(let i = 0; i < input.length; i++) {
            let [sec, eq, index] = input[i].split('-')
            if(+sec === id) {
              filteredInput.push(input[i])

              sec = +sec; eq = +eq; index = +index

              let userAns = this.hintInput[input[i]]
              let keyAns = this.json[sec].equations[eq].math[index].e

              answer.key.equations.push(keyAns)
              answer.user.equations.push(userAns)
            }
          }

          verifyQuestion({ type: 'partial', answer }, (res, ok) => {
            if(ok) {
              // let len = res.equations ? res.equations.length : 0
              for(let i = 0; i < res.equations.length; i++) {
                set(this.correctList, filteredInput[i], res.equations[i])
              }
              this.$broadcast('submit')
              this.$broadcast('sub-manual-correct', res.correct, id)

              if(res.correct) {
                set(this.showList, id + 1, true)
              }
            }
          })

          // because this function is used as a cb for the submit button,
          // return undefined so that the submit button does not do any
          // answer checking as ehelp is not its own qtype
          //
          // NOTE: add manual stats handling for this?
          return undefined
        })
      },
      onGiveUpFactory(id) {
        return (() => {
          this.$broadcast('show-answer', id)
          set(this.showList, id + 1, true)
        })
      }
    },
    events: {
      'dynamic-change-ehint': function() {
        this.hintInput = Object.create(null)
        this.correctList = Object.create(null)
        this.showList = [true]
        console.log("cleared!")
      }
    },
    computed: {
      completed() {
        return this.showList.length > this.data.length
      }
    },
    components: {
      submit,
      mathStatic,
      mathInput,
      aside
    }
  }

</script>
