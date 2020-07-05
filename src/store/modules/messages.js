//
import apiconfig from '../../api.js';
//
const state = {
    count : 0,
    info_message : 'VueX in action',
    general_message : "Operation Message",
    dummy_List : ['One','Two','Three'],
    isBusy : false
}

const getters = {
    count_dummy_items: state=> state.dummy_List.length,
    count_value: state => state.count,
    get_infoMessage: state => state.info_message,
    get_general_message: state => state.general_message,
    get_whetherBusy: state => state.isBusy
};
const actions = {
    updateInfoMessage(payload){
        window.console.log('---ACTION---','updateInfoMessage');
        window.console.log(payload);
    },
    updateCount({state,commit},value){
        window.console.log('---ACTION---','updateCount');
        window.console.log('state',state);
        commit('INCREMENT_COUNT',value);
    },
    updateBusyStatus({commit}, value){ commit('UPDATE_BUSY_STATUS', value) },
    new_appusage({state},payload){
        const url_1 = apiconfig.global.uri + apiconfig.global.version + apiconfig.post.new_appusage;
        window.console.log ( url_1 )
        window.console.log( state.count ) // simply here to Avoid ERROR! NOT needed.
        const dataToSend = { ui : payload, user_agent : window.navigator.userAgent }
        const fetch_data = {
            method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify( dataToSend )
        };
        fetch( url_1, fetch_data ).then(function(resultData){
            //window.console.log('SUCCESS : new_appusage')
            resultData.json().then( result=> window.console.log(result) ).catch( err=> window.console.log(err) )
        }).catch(function(error_2){
            window.console.log('ERROR : new_appusage');
            window.console.log(error_2);
        })
    },
};
const mutations = {
    UPDATE_INFO_MESSAGE (state,message){
        state.general_message = message;
    },
    INCREMENT_COUNT (state, incrementBy){
        window.console.log('---MUTAION---','INCREMENT_COUNT');
        state.count += incrementBy;
    },
    UPDATE_BUSY_STATUS (state, newStatus){
        state.isBusy = newStatus
    }
};
//
export default { state, getters, actions, mutations }