// take a router and configure it with hvu's routes

import class_ from './components/class'
import lesson_ from './components/lesson'
import qTypeMap from './components/lesson/qtypes'
import login from './auth/login.vue'
import register from './auth/register.vue'
import store from './vuex/store'
import chapter from './components/class/chapter.vue'


export function configRouter(router) {
  var routerMap = {
    '/class': {
      name: 'class',
      component: class_
    },
    // '/test': {
    //   name: 'test',
    //   component: test
    // }
  }

  // table of redirects
  // - routes all invalid routes to the top level /class route
  // - routes all top level lesson routes such as /lessons/1.1
  //   to the respective first question of the lesson eg /lessons/1.1/1.1.1
  let redirects = { '*': '/class' }

  // manually build url routing map with right question types
  let units = store.state.classData.units
  for(let u = 0; u < units.length; u++) {
    let lessons = units[u].lessons;
    for(let l = 0; l < lessons.length; l++) {
      let lessonRoute = {
        name: 'lesson',
        component: lesson_,
        subRoutes: {}
      }
      let sub = lessonRoute.subRoutes

      let lessonTop = '/lessons/' + lessons[l].lid
      redirects[lessonTop] = lessonTop + '.1'

      let questions = lessons[l].questions
      for(let q = 0; q < questions.length; q++) {
        sub[`/${questions[q].id}`] = {
          component: qTypeMap[questions[q].type]
        }
      }

      routerMap[`/lesson/${lessons[l].lid}`] = lessonRoute
    }
  }

  router.map(routerMap)

  // placeholder login & registration routes
  router.map({
    '/login': {
      component: login
    },
    '/register': {
      component: register
    },
    '/class/:cid': {
      component: chapter
    }
  })

  router.redirect(redirects)


  router.beforeEach(() => {
    window.scrollTo(0, 0)
  })
}

