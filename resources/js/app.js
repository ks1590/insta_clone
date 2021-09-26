require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';

window.Vue = require('vue');
Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#demo',
    router
});
