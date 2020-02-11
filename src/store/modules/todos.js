//

/*
// VueX module  boilerplate.
// boilerplate for a store. 
const state = {};
const getters = {};
const actions = {};
const mutations = {};
export default {
    state,
    getters,
    actions,
    mutations
}
*/

const state = {
    todos: [{
        id: 1,
        title: 'UI update'
    },{
        id: 2,
        title: 'UX fixing'
    },{
        id: 3,
        title: 'Application Flow'
    },{
        id: 4,
        title: 'sample data integration'
    }]
};
const getters = {
    allTodos: state => {
        return state.todos;
    }
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}