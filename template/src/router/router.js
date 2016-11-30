
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Index from 'src/pages/Index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import About from 'src/pages/About'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [{
  path: '/',
  name: 'index',
  component: Index{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}, {
  path: '/about',
  name: 'about',
  component: About{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  } else {
    const position = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      position.x = 0{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      position.y = 0{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    return position{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}

var router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes,
  linkActiveClass: 'active'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
})

export default router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
