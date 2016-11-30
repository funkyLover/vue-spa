<template>
  <div>
    <h1>about</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from 'src/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'about',
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.setTitle('about'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    ...mapActions([ 'setTitle' ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
