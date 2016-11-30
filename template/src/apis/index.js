
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const get = async (url, data, feedback = false) => {
  try {
    let res = await new Promise((resolve, reject) => {
      Vue.http.get(url, data).then((res) => {
        resolve(res){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }, (err) => {
        reject(err){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    if (feedback) {
      return res.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    if (res.status === 200) {
      if (res.data.flag === 0) {
        return res.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else {
        alert(res.data.msg){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    } else {
      alert('Oops, 出错了请稍后再试'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  } catch (e) {
    alert('Oops, 出错了请稍后再试'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    console.log(e){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const BASE_URL = 'https://api.github.com'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const GET_USER_URL = BASE_URL + '/users'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
