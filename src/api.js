//
// uri+version
// apiconfig.global.uri + apiconfig.global.version + apiconfig.post.create_group
const apiconfig = {
    global:{
        uri : 'http://localhost:3000/api',
        version : '/v1',
    },
    post:{
        create_group : '/createGroup/'
    },
    put:{
        update_group : '/updateGroup/'
    },
    delete: {
        delete_group : '/deleteGroup/'
    },
    get:{
        all_groups : '/getAllGroups/',
        group_by_id : '/getGroupWithId/'
    }
}

export default apiconfig;