//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_patients',
    newPatient:{
        name: 'n',
        password: 'pw',
        email: 'a',
        phone: 'ap',
        address: 'ad',
        activated_on:'1',
        activated_from:'2',
        activated_to:'3'
    },
    allPatients: [],
    isLoginSuccess_patient:false,
    loginPatientObj: {}
};
const getters = {
    getAllPatientsData: state=>{
        return state.allPatients
    },
    getWhetherLoginSuccess: state=> state.isLoginSuccess_patient,
    getLoginPatientObj: state=> state.loginPatientObj
};
const actions = {
    createPatient: ({state,commit},payload) => {
        window.console.log('---ACTION---','createPatient');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload));
        commit('UPDATE_INFO_MESSAGE', 'Patient : Registration Progress');

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.create_patient;
        window.console.log('3. url =',url_1);

        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                'personName': payload.name,
                'personPassword': payload.password,
                'personPhone': payload.phone,
                'personEmail': payload.email,
                'personAddress': payload.address
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                // This MUTATION is in this module
                commit('REGISTER_NEW_PATIENT', rData);
                // This MUTAION from messages.js module
                commit('UPDATE_INFO_MESSAGE', 'Patient.CREATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    updatePatient: ({state,commit},payload) => {
        window.console.log('---ACTION---','updatePatient');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload) );
        commit('UPDATE_INFO_MESSAGE', 'Patient : Updation Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                                            + apiconfig.put.update_patient;
        window.console.log('url',url_1);
        const fetch_data = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({
                'personId': payload.id,
                'personName': payload.name,
                'personPassword': payload.password,
                'personEmail': payload.email,
                'personPhone': payload.phone,
                'personAddress': payload.address
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                // Make UI changes as per the NumberOfRows as returned by API
                // {"result":"SUCCESS : done","NumberOfRows Updated":0}

                // This MUTATION is in this module
                commit('UPDATE_PATIENT', rData);
                // This MUTAION from messages.js module
                commit('UPDATE_INFO_MESSAGE', 'Patient. UPDATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });  
    },
    searchPatientWithId: ({state,commit},payload) => {
        window.console.log('---ACTION---','searchPatientWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Patient : SEARCH in Progress');// MUTAION from messages.js module

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.patient_by_id + payload;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                commit('UPDATE_INFO_MESSAGE', 'Patient : Search SUCCESS.'+JSON.stringify(rData) ); 
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    deletePatientWithId: ({state,commit},payload) => {
        window.console.log('---ACTION---','deletePatientWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Patient : DELETE in Progress');// MUTAION from messages.js module
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.delete.delete_patient;
        const fetch_data = {
            method: 'DELETE',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'personId': payload
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            window.console.log('UPDATE : then');
            resultData.json().then(rData=>{
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                // Mutation
                //commit('UPDATE_CLINIC', rData); 
                commit('UPDATE_INFO_MESSAGE', 'Patient : DELETE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('DELETE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    getAllPatients: ({commit})=>{
        window.console.log('---ACTION---','getAllPatients');
        window.console.log('1. state.reference_name =', state.reference_name);
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.all_patients;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Patients='+rData.length );
                commit('UPDATE_ALL_PATIENTS', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    onPatientLogin: ({state,commit}, payload) => {
        window.console.log('---ACTION---','onPatientLogin');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload', JSON.stringify(payload) );
        commit('UPDATE_INFO_MESSAGE', 'Login : Process in progress');
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.post.login_patient;
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
                    commit('UPDATE_LOGIN_PATIENT', rData.data)
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
    REGISTER_NEW_PATIENT: (state, newPatientResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_PATIENT');
        window.console.log('---MUTAION---', state.reference_name, JSON.stringify(newPatientResult));
        state.newPatient = newPatientResult;
    },
    UPDATE_PATIENT: (state, newPatientResult)=>{
        window.console.log('---MUTAION---','UPDATE_PATIENT');
        state.newPatient = newPatientResult;
    },
    UPDATE_ALL_PATIENTS: (state, patients)=>{
        state.allPatients = patients;
    },
    UPDATE_LOGIN_STATUS: (state, isSuccess)=> state.isLoginSuccess_patient = isSuccess ,
    UPDATE_LOGIN_PATIENT: (state, loginPatient)=> state.loginPatientObj = loginPatient

};
//
export default { state, getters, actions, mutations }