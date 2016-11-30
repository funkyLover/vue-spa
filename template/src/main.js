{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from 'src/App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from 'src/router/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from 'src/vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { sync } from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// for cors
Vue.http.interceptors.push((request, next) => {
  if (!/https:\/\/api.github.com/.test(request.url)) {
    request.credentials = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})
// sync store and router state
sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}).$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
