<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item"> Dashboard </a>
                    <a class="navbar-item"> Users </a>
                    <a class="navbar-item"> Clinics </a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item"> Application Notifications </a>
                </div>
            </div>
        </nav>
        <div>Application admin : TODO</div>

        <button v-on:click="greet">Greet</button>
        <button v-on:click="hello($event)">Greet Event</button>
        <button v-on:click="(count++)">Increase Counter {{count}}</button>
        
        <div class="todos">
            <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">{{todo.title}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeAppAdmin',
    data: function(){
        return({
            count:0
        });
    },
    computed: mapGetters(['allTodos']),
    methods:{
        greet: function () {
            //alert('Greet');
            window.console.log('Greet');
            window.console.log('count',this.count);
            this.count++;
        },
        hello: function(event){
            //console.log(event);
            //alert(event.target);
            //alert('Hello');
            window.console.log(event);
        },
        onCount: function(){
            window.console.log('onCount');
        }
    }
}
</script>