import * as api from '../api'
import * as types from './mutation-types'

export function getClassPage({ dispatch }, cb) {
    api.getClassData(classData => {
        dispatch(types.RECEIVE_CLASS_DATA, classData)
        cb() // ew lol -- used to prevent a data fetch race that always ends in an error
    })
}

export function getQuestion({ dispatch }, type, id) {
    api.getQuestion({ type, id }, question => {
        dispatch(types.RECEIVE_QUESTION, id, question, type)
    })
}

export function verifyQuestion({ dispatch }, type, answer, cb) {
    api.verifyQuestion({ type, answer }, cb)
}

export function setLesson({ dispatch }, lid, lesson) {
  dispatch(types.SET_LESSON, lid, lesson)
}
