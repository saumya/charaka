<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <a class="navbar-item" v-on:click="onCreate"> Create </a>
                    <a class="navbar-item" v-on:click="onRead"> Read </a>
                    <a class="navbar-item" v-on:click="onUpdate"> Update </a>
                    <a class="navbar-item" v-on:click="onDelete"> Delete </a>
                </div>
                <!--
                <div class="navbar-end">
                    <a class="navbar-item"> My Profile </a>
                </div>
                -->
            </div>
        </nav>
        
        <div>
            <strong>Doctor Administration</strong>
        </div>

        <!-- Register New Doctor -->
        <section class="section" id="clinic_register_ui" v-bind:style="{display:section_visibility.ui_create}">
            Create
        </section>
        <!-- Register New Doctor / -->
        <!-- Update Doctor -->
        <section class="section" id="clinic_update_ui" v-bind:style="{display:section_visibility.ui_update}">
            Update
        </section>
        <!-- Update Doctor / -->
        <!-- DELETE Doctor -->
        <section class="section" id="clinic_delete_ui" v-bind:style="{display:section_visibility.ui_delete}">
            Delete
        </section>
        <!-- DELETE Doctor / -->
        <!-- READ Doctor  -->
        <section class="section" id="clinic_read_ui" v-bind:style="{display:section_visibility.ui_read}">
            Read
        </section>
        <!-- READ Doctor / -->

    </div>
</template>

<script>
export default {
    name: 'HomeDoctor',
    components:{},
    computed:{},
    data: function(){
        return({
            section_visibility:{
                ui_create: 'none',
                ui_read: 'none',
                ui_update: 'none',
                ui_delete: 'none'
            },
        })
    },
    methods:{
        onCreate: function(){
            window.console.log('onCreate');
            this.makeThisVisible(1);
        },
        onRead: function(){
            window.console.log('onRead');
            this.makeThisVisible(2);
        },
        onUpdate: function(){
            window.console.log('onUpdate');
            this.makeThisVisible(3);
        },
        onDelete: function(){
            window.console.log('onDelete');
            this.makeThisVisible(4);
        },
        // ui_type = 1 | 2 | 3 | 4
        // 1=CREATE, 2=READ, 3=UPDATE, 4=DELETE
        makeThisVisible: function( ui_type ){
            switch(ui_type){
                case 1:
                    this.section_visibility= {
                        ui_create: 'block',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
                case 2:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'block',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
                case 3:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'block',
                        ui_delete:'none'
                    }
                    break;
                case 4:
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'block'
                    }
                    break;
                default :
                    this.section_visibility= {
                        ui_create: 'none',
                        ui_read:'none',
                        ui_update:'none',
                        ui_delete:'none'
                    }
                    break;
            }
                    
        }
    }
}
</script>