<template>
  <div>
    <h1>about</h1>
    <hello></hello>
    <div class="user" v-if="user">
      <img :src="user.avatar_url">
      <p>hello, i am \{{ user.name }}</p>
      <p>github: <a :href="user.html_url">\{{ user.login }}</a></p>
    </div>
  </div>
</template>

<script>
import Hello from 'src/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as apis from 'src/apis/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'about',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      user: null{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.setTitle('about'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.getUser(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    async getUser{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      let data = await apis.get(`${apis.GET_USER_URL}/funkyLover`, {}, true){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (data.message) {
        // req error
        alert(data.message){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else {
        this.user = data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    },
    ...mapActions([ 'setTitle' ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
