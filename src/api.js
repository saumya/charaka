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
    get:{
        all_groups : '/getAllGroups/',
        group_by_id : '/getGroupWithId/'
    },
    delete:{}
    
}

export default apiconfig;