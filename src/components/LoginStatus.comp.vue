<template>
    <div>
        
        <div class="level">
            <div class="level-item has-text-centered">

                <div class="control mr-1">
                    <div class="tags has-addons">
                        <span class="tag is-dark is-normal">Login</span>
                        <span class="tag" v-bind:class="{ 'is-danger' : !isLoggedIn , 'is-success is-light' : isLoggedIn }"> {{ isLoggedIn }} </span>
                    </div>
                </div>
                <div class="control">
                    <div class="tags has-addons">
                        <span class="tag is-dark is-normal">Active</span>
                        <span class="tag" v-bind:class="{ 'is-danger' : !isActive , 'is-success is-light' : isActive }"> {{ isActive }} </span>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div class="mb-1"> {{ uiMessage }} </div>

        
        
    </div>
    
</template>
<script>
export default {
    name: "LoginStatusComp",
    props: ['loginStatusObj'],
    computed: {
        isLoggedIn: function(){
            let x = this.loginStatusObj.result
            if( x === 'SUCCESS' ){
                x = true
            } else {
                x = false
            }
            return x 
        },
        isActive: function(){
            let x = this.loginStatusObj.isStillActive;
            return x
        },
        uiMessage: function(){
            let x = 'Please Login';
            if( this.isLoggedIn && !this.isActive ){
                x = 'Please Activate your Clinic';
            }else if( this.isLoggedIn && this.isActive ){
                x = '' // all Good
            }
            return x;
        }
    },
}
</script>
<style scoped>

</style>