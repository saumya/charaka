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
    }
};
const actions = {
    updateCount({commit},value){
       // if(state.user){
            commit('INCREMENT_COUNT',value);
        //}
    },
};
const mutations = {
    INCREMENT_COUNT (state, incrementBy){
        state.count += incrementBy;
    }
};
//
export default { state, getters, actions, mutations }