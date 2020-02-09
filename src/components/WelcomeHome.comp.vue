<!-- WelcomeHome -->
<template>
    <div id="welcomeHome">
        <span>{{greet}}</span> User <span>{{message}}</span>. Thank you.
    </div>
</template>

<script>
export default {
    name: 'WelcomeHome',
    props:{
        message: String,
        greet: String
    }
}
</script>

<style scoped>
#welcomeHome {
    background-color: #f5f5dc;
}
</style>