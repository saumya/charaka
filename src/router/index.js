//
import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import VueHelp from '../components/VueHelp.comp'
import One from '../components/One.comp'
import Two from '../components/Two.comp'

import HomeAppAdmin from '../components/Home.AppAdmin'

import HomeClinicAdmin from '../components/Home.ClinicAdmin'
import HomeClinicAdminPatients from '../components/Home.ClinicAdminPatients'
import HomeClinicAdminDoctors from '../components/Home.ClinicAdminDoctors'
import HomeClinicAdminSchedules from '../components/Home.ClinicAdminSchedules'

import HomeClinic from '../components/HomeClinic'
import HomeDoctor from '../components/HomeDoctor'
import HomePatient from '../components/HomePatient'
import HomeSchedule from '../components/HomeSchedule'
import HomeReport from '../components/HomeReport'
import HomeAssignment from '../components/HomeAssignment'
import HomePrescription from '../components/HomePrescription'
import HomeBill from '../components/HomeBill'

import ClinicUI from '../components/ClinicUI'
import DoctorUI from '../components/DoctorUI'
import PatientUI from '../components/PatientUI'

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

        { path: '/clinic', component: HomeClinic },
        { path: '/doctor', component: HomeDoctor },
        { path: '/patient', component: HomePatient },
        { path: '/schedule', component: HomeSchedule },
        { path: '/report', component: HomeReport },
        { path: '/assignments', component: HomeAssignment },

        { path: '/prescriptions', component: HomePrescription },
        { path: '/bills', component: HomeBill },

        /* { path: '/clinic_employees', component: HomeClinicAdmin }, */
        { path: '/clinic_patients', component: HomeClinicAdminPatients },
        { path: '/clinic_doctors', component: HomeClinicAdminDoctors },
        { path: '/clinic_schedules', component: HomeClinicAdminSchedules },
        { path: '/clinic_approvals', component: HomeClinicAdmin },

        { path: '/clinic_ui', component: ClinicUI },
        { path: '/doctor_ui', component: DoctorUI },
        { path: '/patient_ui', component:PatientUI },


        { path: '/app_basics', component: AppBasics }

    ]
});