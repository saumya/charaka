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
        create_doctor : '/createDoctor/'
    },
    put:{
        update_group : '/updateGroup/',
        update_doctor : '/updateDoctor/'
    },
    delete: {
        delete_group : '/deleteGroup/',
        delete_doctor : '/deleteDoctor/'
    },
    get:{
        all_groups : '/getAllGroups/',
        group_by_id : '/getGroupWithId/',
        all_doctors : '/getAllDoctors/', //API is YET to be created!
        doctor_by_id : '/getDoctorWithId/'
    }
}

export default apiconfig;