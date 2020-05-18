//
const state = {
    count : 0,
    info_message : 'VueX in action',
    general_message : "Operation Message",
    dummy_List : ['One','Two','Three']
}

const getters = {
    count_dummy_items: state=>{
        return state.dummy_List.length;
    },
    count_value: state=>{
        return state.count;
    },
    get_infoMessage: state=>{
        return state.info_message;
    },
    get_general_message: state=>{
        return state.general_message
    }
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
};
const mutations = {
    UPDATE_INFO_MESSAGE (state,message){
        state.general_message = message;
    },
    INCREMENT_COUNT (state, incrementBy){
        window.console.log('---MUTAION---','INCREMENT_COUNT');
        state.count += incrementBy;
    }
};
//
export default { state, getters, actions, mutations }