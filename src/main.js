import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import { configRouter } from './route-config'
import app from './components/app.vue'
import config from './config'

import { getClassPage } from './vuex/actions'

// this is somewhat of a hack to keep mathquill embed registration and
// mathquill initialization in the same place -- otherwise if initialized
// in component module, it will attempt embed reg. too early
import { getLatex } from './components/math/latex-table'

require('../deps/mathquill/mathquill' + (config.testing ? '' : '.min'))  // mathquill.min for prod
let MQ = MathQuill.getInterface(2)
MQ.config({
  spaceBehavesLikeTab: true,
  leftRightIntoCmdGoes: 'up',
  restrictMismatchedBrackets: true,
  sumStartsWithNEquals: true,
  supSubsRequireOperand: true,
  charsThatBreakOutOfSupSub: '+-=<>',
  autoSubscriptNumerals: true,
  autoCommands: 'pi theta sqrt sum',
  autoOperatorNames: 'sin cos inf'
})
MQ.registerEmbed('container', id => {
  let latex = getLatex(id)
  let html  = '<span class="math-container" id="math-container-' + id + '">' + latex + '</span>'
  return {
    htmlString: html,
    latex: function() { return latex },
    text:  function() { return latex }
  }
})
window.MQ = MQ

Vue.use(VueRouter)
Vue.use(VueResource)

// sync(store, router)

Vue.config.debug    = config.testing
Vue.config.devtools = config.testing
Vue.config.silent   = config.testing

if(config.testing) {
  window.app = store
}

getClassPage(store, () => {
  let router = new VueRouter()
  configRouter(router)
  router.start({
    components: { app },
    store
  }, '#boot')
})

