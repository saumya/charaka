//
import apiconfig from '../../api.js';
const state = {
    reference_name: 'module_doctors',
    newDoctor:{
        name: 'n',
        email: 'a',
        phone: 'ap',
        address: 'ad',
        activated_on:'1',
        activated_from:'2',
        activated_to:'3'
    },
};

const getters = {};
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
                'doctorPhone': payload.phone,
                'doctorEmail': payload.email,
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
                'doctorEmail': payload.email,
                'doctorPhone': payload.phone,
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
    }

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
    }
};

//window.console.log('apiconfig',apiconfig);


//
export default { state, getters, actions, mutations }