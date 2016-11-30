<template>
  <div>
    <h1>index</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from 'src/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'index',
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.setTitle('index'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    ...mapActions([ 'setTitle' ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
