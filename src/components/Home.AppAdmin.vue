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
        <div class="todos">
            <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">{{todo.title}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HomeAppAdmin',
    computed: mapGetters(['allTodos']),
    methods:{
        greet: function () {
            alert('Greet');
        }
    }
}
</script>