<!-- HTML -->
<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/app_basics"> Basics </router-link>
        <router-link to="/app_admin">App Admin</router-link>
        <router-link to="/clinic_admin">Clinic Admin</router-link>
        <router-link to="/doctor">Doctor</router-link>
        <router-link to="/patient">Patient</router-link>
    </div>
</template>
<!-- Code -->
<script>
export default {
    name: 'MenuTop'
}
</script>
<!-- Style -->
<style scoped>
a {
  color: #007741;
}
</style>