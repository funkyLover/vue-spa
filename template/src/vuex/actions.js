
import * as types from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const setTitle = ({ commit }, title) => {
  commit(types.SET_TITLE, title){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
