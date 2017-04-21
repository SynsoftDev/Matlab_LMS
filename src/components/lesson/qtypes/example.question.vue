<!--
  example question type

  an example question type that that includes all the basic components
  that most types need
--> 

<style>
  /* 
    add styles here. best practice is to scope them
    to the top level question class (in this case example-question)
    so that there is no style leakage between components but HVU EE 
    desperately needs its styles claned up and does not do this very often...
  */
</style>

<template>
  <div class="example-question">
    <p>example question</p>
    <math-static :latex="staticEquation"></math-static>
    
    <br>
    
    <p>
      <!-- current question prompt provided through this.data -->
      Prompt: {{data.prompt}}
    </p>

    <math-input :latex.sync="userInput"
                :correct="userInputCorrect"
                :answer="data.answer"></math-input>

    <!-- specify handler methods for every step of the answer submit process -->
    <!-- the keyboard will automatically pull out variables from the equation
         that the user will want to use. the regex that does this can be changed
         in math/keyboard.vue -->
    <submit :on-submit="onSubmit"
            :on-answer="onAnswer"
            :on-give-up="onGiveUp"></submit>
  </div>
</template>

<script>
  // import other files here
  import mathStatic from '../../math/math-static.vue'
  import mathInput from '../../math/math-input.vue'
  import submit from '../helper/submit.vue'

  export default {
    // component name that appears in the vue dev tools
    name: 'ExampleQuestion',  // do NOT have spaces in this name

    // initialize all of your data here
    data() {
      return {
        staticEquation: 'R_1=R_{TH}=2\\Omega',

        userInput: '',

        // set to undefined initially before the user first answers
        // is true or false depending on the previously submitted attempt
        userInputCorrect: undefined 
      }
    },

    // add methods that are called inside <template> or other functions
    methods: {
      // called before the question answer data is POSTed to the server's
      // particular question type handler endpoint
      onSubmit() {
        // this schema is built differently for every different qtypes
        // so every qtype will have different onSubmit function bodies depending
        // on the schema for the qtype's endpoint
        let ansVerificationRequest = {
          id: this.data.title,  // id of the current question
          answer: this.userInput  // answer to be checked
        }

        // obj returned from onSubmit is used by the submit button component to automatically
        // submit to the right question type endpoint. in this case it would be 
        // `/api/example` because of the name specified in qtypes/index.js
        // return ansVerificationRequest

        // if you need to do a custom POST request and dont want the submit button
        // to make one for you return undefined from this function instead. 
        //
        // emily -- ask me if you want to do something like this. look at helper/ehelp.vue
        // for an example
        return undefined
      },
      // called when server response recieved.
      // contains question-specific reseponse data
      // as well as whether or not the entire submission
      // is true
      onAnswer(isCorrect, data) {
        // will update the <math-input> box to be red or green depending
        // on if they got it right or not
        this.userInputCorrect = this.isCorrect

        // submit event handled by <math-input>
        this.$broadcast('submit')
      },
      onGiveUp() {
        // <math-input> will handle this event and display a red or green
        // border depending on if the question is right or not
        this.$broadcast('show-answer')
      }
    },

    // add components you want to import to use in the <template> here
    components: {
      mathStatic,
      mathInput,
      submit
    },

    // everything below will force this question component to be reloaded
    // every time the user routes to it. this prevents stale-state issues
    // and __MUST__ be in every question type in the qtypes folder
    route: { canReuse: false },
    vuex: {
      getters: {

        // provides the this.data property which is the current
        // question that is reflected in the store. this is set 
        // automatically from the link the user clicked for the class
        // page
        data: state => state.currentQuestion
      }
    }
  }
</script>
