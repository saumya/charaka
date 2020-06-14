//
// API calls and Data
//
import apiconfig from '../../api.js';
//
const state = {
    reference_name: 'module_clinics',
    newClinic:{
        name: 'n',
        adminName: 'a',
        adminPassword: 'ap',
        activated_on:'1',
        activated_from:'2',
        activated_to:'3'
    },
    allClinics:[],
    selectedClinic: {},
};
const getters = {
    getNewClinic: state=>{
        return state.newClinic
    },
    getAllClinicsData: state=>{
        return state.allClinics
    },
    getSeletedClinic: state=>{
        return state.selectedClinic
    },
};
const actions = {
    registerNewClinic: ({state,commit},payload) => {
        window.console.log('---ACTION---','registerNewClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        //window.console.log('2. store =', this);
        window.console.log('2. payload =', payload);
        //
        //this.dispatch('updateInfoMessage','registerNewClinic');
        commit('UPDATE_INFO_MESSAGE', 'Registration Progress');
        //
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_group;
        //
        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupName': payload.name,
                'adminUserName': payload.adminName,
                'adminPassword': payload.adminPassword,
                'activatedOn': payload.activated_on,
                'activeFrom': payload.activated_from,
                'activeTo': payload.activated_to
            })
        };
        //var that = this;
        fetch( url_1, fetch_data ).then(function(resultData){
            //commit('REGISTER_NEW_CLINIC', resultData);
            resultData.json().then(function(rData){
                commit('REGISTER_NEW_CLINIC', rData); // Mutation >>
                commit('UPDATE_INFO_MESSAGE', 'Clinic.Registration SUCCESS.'+JSON.stringify(rData) ); // Mutation >>
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 1');
            window.console.log(error_2);
        });
        //
        //commit('REGISTER_NEW_CLINIC', result);
    }, // registerNewClinic/
    updateClinic: ({state,commit},payload) => {
        window.console.log('---ACTION---','updateClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'UPDATE clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.put.update_group;
        const fetch_data = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupId': payload.id,
                'groupName': payload.name,
                'adminUserName': payload.adminName,
                'adminPassword': payload.adminPassword,
                'activatedOn': payload.activated_on,
                'activeFrom': payload.activated_from,
                'activeTo': payload.activated_to
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Registration SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('UPDATE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    searchClinicWithId: ( {state, commit},payload )=>{
        window.console.log('---ACTION---','searchClinicWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'SEARCH clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.group_by_id + payload;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) ); 
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    deleteClinicWithId: ( {state, commit},payload )=>{
        window.console.log('---ACTION---','deleteClinicWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'DELETE clinic in Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.delete.delete_group;
        const fetch_data = {
            method: 'DELETE',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'groupId': payload
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                //commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Delete SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('DELETE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    getAllClinics: ({commit})=>{
        window.console.log('---ACTION---','getAllClinics');
        window.console.log('1. state.reference_name =', state.reference_name);
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.all_groups;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('GET : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Clinics='+rData.length );
                commit('UPDATE_ALL_CLINICS', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },

    assignDoctorToClinic: ( {state, commit},payload )=>{
        // payload = { clinincId: '' , doctorId: '' }
        window.console.log('assignDoctorToClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        //window.console.log('2. payload =', payload);
        //window.console.log( JSON.stringify(payload) );
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.assign_doctor_to_clinic;
        const fetch_data = {
            method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(payload)
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                commit('UPDATE_INFO_MESSAGE', 'Assignment SUCCESS.'+JSON.stringify(rData) ); // Mutation >>
                window.console.log('Result Data', rData);
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 1');
            window.console.log(error_2);
        });
    },
    activateClinic: ({state, commit},payload)=>{
        window.console.log('activateClinic');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.activate_clinic;
        window.console.log('3. url =', url_1);
        const fetch_data = {
            method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(payload)
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('Result Data', rData);
                var resultString = 'No Clinics found with that Id';
                if(rData[0] == 1){
                    resultString = 'Activation SUCCESS. One Clinic is activated successfully.';
                }else{
                    resultString = 'Activation FAIL! No Clinics found with that Id!';
                }
                // Mutation
                commit('UPDATE_INFO_MESSAGE', resultString );
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 1');
            window.console.log(error_2);
        });
    },
    onClinicLogin: ({state,commit}, payload) => {
        window.console.log('onClinicLogin');
        window.console.log('1. state.reference_name', state.reference_name);
        window.console.log('2. payload', JSON.stringify(payload) );
        commit('UPDATE_INFO_MESSAGE', 'Login : Process in progress');
        //
        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.login_clinic; 
        const fetch_data = {
            method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(payload)
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('Result Data', rData);
                
                //window.console.log( rData.result );
                //window.console.log( rData.data );

                let resultString = 'No Clinics found with that Id';
                if(rData.result === 'SUCCESS'){
                    resultString = 'SUCCESS. Login.';
                    window.console.log( rData.data );
                    //TODO: Check for activation
                    
                }else{
                    resultString = 'FAIL!! Login. No Clinics found with that Id!';
                }
                // Mutation
                commit('UPDATE_INFO_MESSAGE', resultString );
            }).catch(function(error_3){
                window.console.log('ERROR : 2'); 
                window.console.log(error_3);
            })
        }).catch(function(error_2){
            window.console.log('ERROR : 1');
            window.console.log(error_2);
        });
    }, // onClinicLogin/
    onClinicSelectionDone: ({state,commit},payload) => {
        window.console.log('onClinicSelectionDone');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        //Mutation
        commit('SELECT_CLINIC_INFO', payload );
    },
    checkForMapActions: ({state,commit}, payload) => {
        window.console.log('checkForMapActions');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        commit('UPDATE_INFO_MESSAGE', 'ERROR : fix wih mapActions');
    },
};
const mutations = {
    REGISTER_NEW_CLINIC: (state, newClinicResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_CLINIC');
        window.console.log('---MUTAION---', state.reference_name, newClinicResult);
        state.newClinic = newClinicResult;
        state.clinic_message = 'SUCCESS: New Clinic registered.'
    },
    UPDATE_CLINIC: (state, clinicResult)=>{
        window.console.log('---MUTAION---','UPDATE_CLINIC');
        state.newClinic = clinicResult;
        state.clinic_message = 'SUCCESS: Clinic updated.';
    },
    UPDATE_ALL_CLINICS: (state, clinics)=>{
        state.allClinics = clinics;
    },
    SELECT_CLINIC_INFO: (state, clinic) => {
        state.selectedClinic = clinic;
    }

};
//
export default { state, getters, actions, mutations }