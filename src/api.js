//
// uri+version
// apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_group
const apiconfig = {
    global:{
        uri : 'http://localhost:3000/api',
        version : '/v1',
    },
    post:{
        create_group : '/createGroup/',
        create_doctor : '/createDoctor/',
        create_patient : '/createPerson/',
        create_schedule : '/createSchedule/'
    },
    put:{
        update_group : '/updateGroup/',
        update_doctor : '/updateDoctor/',
        update_patient : '/updatePerson/',
        update_schedule : '/updateSchedule/'
    },
    delete: {
        delete_group : '/deleteGroup/',
        delete_doctor : '/deleteDoctor/',
        delete_patient : '/deletePerson/',
        delete_schedule : '/deleteSchedule/',
    },
    get:{
        all_groups : '/getAllGroups/',
        all_doctors : '/getAllDoctors/', 
        group_by_id : '/getGroupWithId/',
        doctor_by_id : '/getDoctorWithId/',
        patient_by_id : '/getPersonWithId/',
        schedule_by_id : '/getScheduleWithId/'
    }
}

export default apiconfig;