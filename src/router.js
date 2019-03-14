import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard/Index.vue'
Vue.use(VueRouter);

const routes = [
    {path:'/', component: Dashboard}
];

export default new VueRouter({
    mode: 'history', 
    routes
});