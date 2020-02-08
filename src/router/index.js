//
import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import VueHelp from '../components/VueHelp.comp'
import One from '../components/One.comp'
import Two from '../components/Two.comp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            props: true
        },
        { path: '/vue', component: VueHelp },
        { path: '/one', component: One },
        { path: '/two', component: Two }
    ]
});