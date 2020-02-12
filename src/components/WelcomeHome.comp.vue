<!-- WelcomeHome -->
<template>
    <div id="welcomeHome">
        <span>{{greet}}</span> User <span>{{message}}</span>. Thank you.{{version}}
    </div>
</template>

<script>
export default {
    name: 'WelcomeHome',
    props:{
        message: String,
        greet: String
    },
    data: function(){
        return({
            name: 'WelcomeHome-1.0.0',
            version: '1.0.0'
        })
    },
    methods: {
        
    }
}
</script>

<style scoped>
#welcomeHome {
    background-color: #f5f5dc;
}
</style>