import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        classData: {},
        lessons:   {},    // contains lesson question ids and types. mostly for sidebar

        // quesions should be an empty object but is commented for clarity
        // see HVU EE store.js
        questions: {
            // see HVU EE application store in devtools vuex window
            // a really basic question data example for the example qtype
            // this will be different for every question
            // accessed through the data getter in most qtypes
            "1.1.1": {
                _type: "example",
                prompt: "example prompt",
                title: "1.1.1",
                answer: "V_1+R_2"
            }
        },
        // initial state is loading. this will get overwritten when 
        // a question is successfully retrieved from the server
        currentQuestion: 'loading'
    },
    mutations
})
