//
import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import VueHelp from '../components/VueHelp.comp'
import One from '../components/One.comp'
import Two from '../components/Two.comp'

import HomeAppAdmin from '../components/Home.AppAdmin'
import HomeClinicAdmin from '../components/Home.ClinicAdmin'
import HomeDoctor from '../components/HomeDoctor'
import HomePatient from '../components/HomePatient'

import AppBasics from '../components/AppBasics'

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
        { path: '/two', component: Two },

        { path: '/clinic_admin', component: HomeClinicAdmin },
        { path: '/app_admin', component: HomeAppAdmin },
        { path: '/doctor', component: HomeDoctor },
        { path: '/patient', component: HomePatient },

        { path: '/app_basics', component: AppBasics }

    ]
});