
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import page from './modules/page'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import createLogger from 'vuex/dist/logger'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const debug = process.env.NODE_ENV !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.debug = debug{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  modules: {
    page{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
