<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onCreate"> Create </a>
                    <!--
                    <a class="navbar-item" v-on:click="onRead"> Read </a>
                    <a class="navbar-item" v-on:click="onUpdate"> Update </a>
                    <a class="navbar-item" v-on:click="onDelete"> Delete </a>
                    -->
                </div>
            </div>
        </nav>
        <GeneralMessage :message="get_general_message"></GeneralMessage>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import GeneralMessage from './GeneralMessage';

export default {
    name: 'bills',
    components: { GeneralMessage },
    computed: {
        ...mapGetters(['get_general_message']),
    },
    methods:{
        onCreate: function(){},
        onRead: function(){},
        onUpdate: function(){},
        onDelete: function(){}
    },
}
</script>