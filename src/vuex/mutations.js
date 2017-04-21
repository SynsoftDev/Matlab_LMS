import { set } from 'vue'
import * as types from './mutation-types'

export default {
    [types.RECEIVE_CLASS_DATA](state, classData) {
        state.classData = classData
    },
    [types.RECEIVE_LESSON](state, lid, lesson) {
        set(state.lessons, lid, lesson)
    },
    [types.RECEIVE_QUESTION](state, id, question, type) {
        set(state.questions, id, question)

        // tag the question type for later identification
        // when the app pulls from the store directly
        // this feature is meant to be used in the lesson index.vue
        // to be able to read from the global store "cache" of questions
        // directly without having to parse classData every time

        // UPDATE: this is also useful for figuring out the type of
        //         the current question when verifying an answer in the
        //         helper/submit.vue component
        set(state.questions[id], '_type', type)

        state.currentQuestion = question
    },
    [types.SET_LESSON](state, lid, lesson) {
      set(state.lessons, lid, lesson)
    }
}
