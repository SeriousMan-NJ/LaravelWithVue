
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vuex, { mapState } from 'vuex'
import Example from './scenes/Example'
import PostList from './scenes/PostList'
import postList from './scenes/PostList/vuex'
import PostCreate from './scenes/PostCreate'
import postCreate from './scenes/PostCreate/vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    postList,
    postCreate
  }
})

const app = new Vue({
    el: '#app',
    store,
    data: {
      v: { render: (h) => h('div', 'loading...') }
    },
    render (h) { return h(this.v) }
})

import page from 'page'
page('/', () => app.v = Example)
page('/post', () => app.v = PostList)
page('/post/create', () => app.v = PostCreate)
page()
