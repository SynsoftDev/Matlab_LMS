<!--
  submit button which will show a give up button if maxTries
  is exceeded. submit and giveup functionality is question
  dependant so every question component passes handlers via
  prop for these actions. this component also consolidates the display
  of hints for all question types

  this component binds every callback's `this` to the parent component
  and thus submits will not work in nested component hierarchies.


  any of the following prop callback functions may be omitted if they are
  not required:

  onSubmit :: function(): any { ... }
           Called when the submit butten is clicked and the answer
           object to post with verifyquestion needs to be built from
           the current question state. returns the question specific
           answer object that  will be posted to the server via verifyQuestion

  onGiveUp :: function(): void { ... }
           Called when the give up button is clicked

  onAnswer :: function(correctAnswer: boolean, responseData: any): void { ... }
           called when the answer verification response is received
           from the server


  UPGRADE: in the future it seems like passing prop objects
           in vue2 is frowned upon... this might need to be
           done with the new event api in the future.

           there might be potential to use a message bus if
           complex questions need to nest the submit button inside
           another component. the most compelling thing that a msg
           bus would allow us to do would be to hilight math-input
           components red if the answer is wrong. this would provide
           much better and more consistent user feedback across all
           questions that use the submit component
 -->

<style>
  .bad-sub {
    color: #ff4545
  }
</style>

<template>
  <div class="submit-comp">
    <div v-show="showHint">
      <em class="bad-sub" v-if="givenUp">Gave up</em>
      <em class="bad-sub" v-else>Incorrect answer</em>

      <div class="alert alert-info q-hint" v-show="hint">
        <b>Hint:</b>
        <span>{{ hint }}</span>
      </div>
    </div>

    <div class="alert alert-success q-hint" v-show="isCorrect">Correct!</div>

    <button type="button"
            class="btn btn-default q-submit"
            :disabled="isCorrect || givenUp"
            @click="_submit">Submit</button>

    <button type="button"
            class="btn btn-warning q-submit"
            :disabled="givenUp"
            @click="_giveUp"
            v-show="showGiveUp">Give Up</button>
  </div>
</template>

<script>
  import { verifyQuestion } from '../../../api/'

  function stub() { return undefined }

  export default {
    name: 'SubmitButton',
    props: ['maxTries', 'hint', 'eventId', /* callbacks: */ 'onSubmit', 'onGiveUp', 'onAnswer'],
    data() {
      return {
        numSubmits: 0,
        showGiveUp: false,
        showHint:   false,
        givenUp:    false,
        isCorrect:  false,
        hint:       this.hint,
        max:        this.maxTries || 3,

        submitCb:   typeof this.onSubmit === 'function' ? this.onSubmit : stub,
        answerCb:   typeof this.onAnswer === 'function' ? this.onAnswer : stub,
        giveUpCb:   typeof this.onGiveUp === 'function' ? this.onGiveUp : stub
      }
    },
    methods: {
      _submit() {
        // bind `this` in cb to be parent component's vm so that
        // passed method can use question-specific vm data
        let answer = this.submitCb.call(this.$parent)
        if(answer === undefined) {
          if(++this.numSubmits === this.max && this.giveUpCb !== stub) {
            this.showGiveUp = true
          }
          return
        }

        verifyQuestion({ type: this.curQType, answer }, (data, ok) => {
          if(typeof data.correct === 'string')
            data.correct = (data.correct === 'true')

          if(ok && data.correct) {
            this.isCorrect = true
            this.showHint = false
            this.showGiveUp = false
          } else {
            this.isCorrect = false
            this.showHint = true

            if(++this.numSubmits === this.max && this.giveUpCb !== stub) {
              this.showGiveUp = true
            }
          }

          this.answerCb.call(this.$parent, data.correct, data)
        })
      },
      _giveUp() {
        if(!this.givenUp) {
          this.giveUpCb.call(this.$parent)
          this.givenUp = true
        }
      }
    },
    vuex: {
      getters: {
        // question type tagging via _type see mutations.js
        curQType: state => state.currentQuestion._type
      }
    },
    events: {
      'reset-submit': function() {
        this.numSubmits = 0
        this.showHint = false
        this.isCorrect = false
        this.showGiveUp = false
        this.givenUp = false
      },
      'sub-manual-correct': function(correct, eid) {
        if(eid === this.eventId) {
          this.isCorrect = correct
          this.showHint = !correct
        }
      }
    }
  }
</script>
