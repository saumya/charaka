//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_doctors',
    newDoctor:{
        name: 'n',
        email: 'a',
        phone: 'ap',
        specialization: 'na',
        address: 'ad',
        activated_on:'1',
        activated_from:'2',
        activated_to:'3'
    },
    allDoctors: [],
    foundDoctorIdsForTheClinic: false,
    allDoctorsInTheClinic: [],
    loginDoctorObj: {},
    searched_doctor_with_id: {}
};

const getters = {
    getAllDoctorsData: state=> state.allDoctors ,
    getWhetherFoundDoctorIdsForTheClinic: state=> state.foundDoctorIdsForTheClinic,
    getDoctorsForTheClinicId: state=> state.allDoctorsInTheClinic,
    getLoggedInDoctorObj: state=> state.loginDoctorObj,
    getSearchedDoctorWithId: state=> state.searched_doctor_with_id
};
const actions = {
    createDoctor: ({state,commit},payload) => {
        window.console.log('---ACTION---','createDoctor');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload));
        commit('UPDATE_INFO_MESSAGE', 'Doctor : Registration Progress');

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_doctor;
        window.console.log('3. url =',url_1);

        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'doctorName': payload.name,
                'doctorPassword': payload.password,
                'doctorPhone': payload.phone,
                'doctorEmail': payload.email,
                'doctorSpecialization': payload.specialization,
                'doctorAddress': payload.address
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                // This MUTATION is in this module
                commit('REGISTER_NEW_DOCTOR', rData);
                // This MUTAION from messages.js module
                commit('UPDATE_INFO_MESSAGE', 'Doctor.CREATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    updateDoctor: ({state,commit},payload)=>{
        window.console.log('---ACTION---','updateDoctor');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload) );
        commit('UPDATE_INFO_MESSAGE', 'Doctor : Updation Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.put.update_doctor;
        window.console.log('url',url_1);
        const fetch_data = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'doctorId': payload.id,
                'doctorName': payload.name,
                'doctorPassword': payload.password,
                'doctorEmail': payload.email,
                'doctorPhone': payload.phone,
                'doctorSpecialization': payload.specialization,
                'doctorAddress': payload.address
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                // Make UI changes as per the NumberOfRows as returned by API
                // {"result":"SUCCESS : done","NumberOfRows Updated":0}

                // This MUTATION is in this module
                commit('UPDATE_DOCTOR', rData);
                // This MUTAION from messages.js module
                commit('UPDATE_INFO_MESSAGE', 'Doctor. UPDATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    searchDoctorWithId: function({state, commit},payload){
        window.console.log('---ACTION---','searchDoctorWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Doctor : SEARCH in Progress');// MUTAION from messages.js module

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.doctor_by_id + payload;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                commit('UPDATE_INFO_MESSAGE', 'Doctor : Search SUCCESS.'+JSON.stringify(rData) ); 
                commit('UPDATE_SEARCHED_DOCTOR', rData)
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    deleteDoctorWithId: function({state, commit},payload){
        window.console.log('---ACTION---','deleteDoctorWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Doctor : DELETE in Progress');// MUTAION from messages.js module
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.delete.delete_doctor;
        const fetch_data = {
            method: 'DELETE',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'doctorId': payload
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                //commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Doctor : DELETE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('DELETE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    getAllDoctors: ({commit})=>{
        window.console.log('---ACTION---','getAllDoctors');
        window.console.log('1. state.reference_name =', state.reference_name);
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.all_doctors;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Doctors='+rData.length );
                commit('UPDATE_ALL_DOCTORS', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },

    getAllDoctorsInClinicId: function({commit},payload){
        window.console.log('---ACTION---','getAllDoctorsInClinicId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('getAllDoctorsInClinicId', payload);
        window.console.log('TODO','1. Call the API. 2. Write the API');
        commit('UPDATE_INFO_MESSAGE', 'Searching Doctors.' );

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.get.all_doctors_byClinic + payload ;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('SEARCH : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                
                //commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Doctors='+rData.length );
                //commit('UPDATE_ALL_DOCTORS', rData);

                // foundDoctorIdsForTheClinic
                
                commit('UPDATE_INFO_MESSAGE', 'Found Doctor Ids for the Clinic.' );
                commit('FOUND_DOCTORS_FOR_CLINIC', rData);
            
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },

    onDoctorLogin: ({state,commit}, payload) => {
        window.console.log('---ACTION---','onDoctorLogin');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload', JSON.stringify(payload) );

        commit('UPDATE_INFO_MESSAGE', 'Login : Process in progress');
        
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.login_doctor;
        const fetch_data = {
            method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(payload)
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('Result Data', rData);

                commit('UPDATE_BUSY_STATUS', false)
                commit('UPDATE_LOGIN_STATUS', rData.success)

                if(rData.success===true){
                    window.console.log('LOGIN:SUCCESS');
                    commit('UPDATE_INFO_MESSAGE', 'Login : SUCCESS');
                    commit('UPDATE_LOGIN_DOCTOR', rData.data)
                }else{
                    window.console.log('LOGIN:FAIL');
                    commit('UPDATE_INFO_MESSAGE', 'Login : FAIL');
                }

            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
        
    },

};
const mutations = {
    REGISTER_NEW_DOCTOR: (state, newDoctorResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_CLINIC');
        window.console.log('---MUTAION---', state.reference_name, JSON.stringify(newDoctorResult));
        state.newDoctor = newDoctorResult;
    },
    UPDATE_DOCTOR: (state, doctorResult)=>{
        window.console.log('---MUTAION---','UPDATE_DOCTOR');
        state.newDoctor = doctorResult;
        //state.clinic_message = 'SUCCESS: Clinic updated.';
    },
    UPDATE_ALL_DOCTORS: (state, doctors)=> (state.allDoctors = doctors),
    FOUND_DOCTORS_FOR_CLINIC: (state, doctors)=>{
        state.foundDoctorIdsForTheClinic = true;
        state.allDoctorsInTheClinic = doctors;
    },
    UPDATE_LOGIN_DOCTOR: (state, doctor)=> (state.loginDoctorObj = doctor),
    UPDATE_SEARCHED_DOCTOR: (state, doctor)=> (state.searched_doctor_with_id = doctor)
};

//window.console.log('apiconfig',apiconfig);


//
export default { state, getters, actions, mutations }