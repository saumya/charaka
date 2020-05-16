//
const state = {
    info_message : 'VueX in action',
    general_message : "Operation Message",
    dummy_List : ['One','Two','Three']
}

const getters = {
    count_dummy_items: state=>{
        return state.dummy_List.length;
    }
};
const actions = {

};
const mutations = {

};
//
export default { state, getters, actions, mutations }