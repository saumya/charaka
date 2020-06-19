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