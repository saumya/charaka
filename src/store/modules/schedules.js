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
    allSchedules: [],
    filteredSchedules: [],
    filteredSchedulesForDoctorId: [],
};
const getters = {
    getAllSchedulesData: state=>{
        return state.allSchedules;
    },
    getFilteredSchedulesData: state => {
        return state.filteredSchedules
    },
    getDataAllSchedulesByClinicId: state => {
        return state.filteredSchedules
    },
    getSchedulesForDoctorId: state=> state.filteredSchedulesForDoctorId
};
const actions = {
    createSchedule: ({state,commit},payload) => {
        window.console.log('---ACTION---','createSchedule');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', JSON.stringify(payload));
        commit('UPDATE_INFO_MESSAGE', 'Schedule : Registration Progress');

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                                                + apiconfig.post.create_schedule;
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
                'scheduleId': payload.id,
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
        
        commit('UPDATE_INFO_MESSAGE', 'Schedule : SEARCH in Progress');// MUTAION from messages.js module

        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.schedule_by_id + payload;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                commit('UPDATE_INFO_MESSAGE', 'Schedule : Search SUCCESS.'+JSON.stringify(rData) ); 
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
                'scheduleId': payload
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
    },
    getAllSchedules: ({commit})=>{
        window.console.log('---ACTION---','getAllSchedules');
        window.console.log('1. state.reference_name =', state.reference_name);
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.get.all_schedules;
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Schedules='+rData.length );
                commit('UPDATE_ALL_SCHEDULES', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },
    getAllSchedulesByClinicId: ({commit}, payload)=>{
        window.console.log('getAllSchedulesByClinicId');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.get.all_schedules_byClinic_id + payload ;
        
        window.console.log('url=',url_1);
        commit('UPDATE_INFO_MESSAGE', 'SEARCHING. Schedules for the clinic');

        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Schedules='+rData.length);
                commit('UPDATE_FILTERED_SCHEDULES', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });

    }, // getAllSchedulesByClinicId

    getAllSchedulesByClinicIdDoctorIdDate: function({state, commit},payload){
        window.console.log('getAllSchedulesByClinicIdDoctorIdDate');
        window.console.log('1. state.reference_name =', state.reference_name);
        window.console.log('2. payload =', payload);

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.get.all_schedules_byClinic_byDoctor_onDate
                        + payload.clinicId 
                        + '/' + payload.doctorId
                        + '/' + payload.onDate;
        
        window.console.log('url=',url_1);
        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('UPDATE : SUCCESS :');
                window.console.log(rData);
                //Mutation
                //commit('SEARCH_CLINIC', rData);
                //commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.'+JSON.stringify(rData) );
                commit('UPDATE_INFO_MESSAGE', 'SUCCESS. Total Schedules='+rData.length);
                commit('UPDATE_FILTERED_SCHEDULES', rData);
            }).catch(function(error_2){
                window.console.log('ERROR : 2');
                window.console.log(error_2);
            });
        }).catch(function(error_1){
            window.console.log('ERROR : 1');
            window.console.log(error_1);
        });
    },

    getAllSchedulesByDoctorId: function( {state, commit},payload ){
        window.console.log('action : getAllSchedulesByDoctorId')
        window.console.log('1. state.reference_name =', state.reference_name)
        window.console.log('2. payload =', payload)
        commit('UPDATE_INFO_MESSAGE', 'Getting Schedules for the doctor with id='+payload)

        const url_1 = apiconfig.global.uri + apiconfig.global.version 
                        + apiconfig.get.all_schedules_by_doctor_id + payload
        
        //window.console.log('url=',url_1)

        fetch( url_1 ).then(function(resultData){
            resultData.json().then(function(rData){
                window.console.log('SUCCESS : getAllSchedulesByDoctorId : ');
                //window.console.log(rData);
                //Mutation
                commit('UPDATE_INFO_MESSAGE', 'Search SUCCESS.')
                commit('UPDATE_FILTERED_SCHEDULES_FOR_DOCTOR_ID', rData)
            }).catch(function(error_2){
                window.console.log('ERROR : 2 : getAllSchedulesByDoctorId : ');
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
    UPDATE_PATIENT: (state, doctorResult)=>{
        window.console.log('---MUTAION---','UPDATE_PATIENT');
        state.newDoctor = doctorResult;
    },
    UPDATE_ALL_SCHEDULES: (state, schedules)=>{
        state.allSchedules = schedules;
    },
    UPDATE_FILTERED_SCHEDULES: (state, schedules)=>{
        state.filteredSchedules = schedules;
    },
    UPDATE_FILTERED_SCHEDULES_FOR_DOCTOR_ID: (state, schedules)=> (state.filteredSchedulesForDoctorId=schedules)
};
//
export default { state, getters, actions, mutations }