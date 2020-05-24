//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_schedules',
    newSchedule:{
        name: 'n',
        sDate: '2020-05-08',
        isMorning:'1',
        personId: '3',
        doctorId: '4',
        groupId:'5'
    },
};
const getters = {};
const actions = {
    createSchedule: ({state,commit},payload) => {
        window.console.log('---ACTION---','createSchedule');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload));
        commit('UPDATE_INFO_MESSAGE', 'Schedule : Registration Progress');

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_schedule;
        window.console.log('3. url =',url_1);

        const fetch_data = {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'name': payload.name,
                'sDate': payload.sDate,
                'isMorning': payload.isMorning,
                'personId': payload.personId,
                'doctorId': payload.doctorId,
                'groupId': payload.groupId
            })
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            resultData.json().then(function(rData){
                // This MUTATION is in this module
                commit('REGISTER_NEW_PATIENT', rData);
                // This MUTAION from messages.js module
                commit('UPDATE_INFO_MESSAGE', 'Schedule.CREATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    updateSchedule: ({state,commit},payload) => {
        window.console.log('---ACTION---','updateSchedule');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload) );
        commit('UPDATE_INFO_MESSAGE', 'Schedule : Updation Progress');
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.put.update_schedule;
        window.console.log('url',url_1);
        const fetch_data = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                'personId': payload.id,
                'personName': payload.name,
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
                commit('UPDATE_INFO_MESSAGE', 'Schedule. UPDATE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });  
    },
    searchScheduleWithId: ({state,commit},payload) => {
        window.console.log('---ACTION---','searchPatientWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Patient : SEARCH in Progress');// MUTAION from messages.js module

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.schedule_by_id + payload;
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
    deleteScheduleWithId: ({state,commit},payload) => {
        window.console.log('---ACTION---','deletePatientWithId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);
        
        commit('UPDATE_INFO_MESSAGE', 'Schedule : DELETE in Progress');// MUTAION from messages.js module
        
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.delete.delete_schedule;
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
                commit('UPDATE_INFO_MESSAGE', 'Schedule : DELETE SUCCESS.'+JSON.stringify(rData) );
            }).catch(error_2=>{
                window.console.log('DELETE: ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    }
};
const mutations = {
    REGISTER_NEW_PATIENT: (state, newPatientResult) => {
        window.console.log('---MUTAION---','REGISTER_NEW_PATIENT');
        window.console.log('---MUTAION---', state.reference_name, JSON.stringify(newPatientResult));
        state.newPatient = newPatientResult;
    },
    UPDATE_PATIENT: (state, doctorResult)=>{
        window.console.log('---MUTAION---','UPDATE_PATIENT');
        state.newDoctor = doctorResult;
    }
};
//
export default { state, getters, actions, mutations }