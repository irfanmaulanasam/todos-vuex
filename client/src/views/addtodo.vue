<template>
    <div class="addtodo">
        <input type="text" v-model="title" placeholder="input title here">
        <br>
        <!-- <textarea name="todosdetail" v-model="detail" id="" cols="30" rows="10" placeholder="input detail here"></textarea> -->
        <br>
        <!-- <input type="date" v-model="duedate"> -->
        <br>
        <input type="submit" @click.prevent="add" value="add todos" />
        <input type="submit" @click="reset" value="cancel" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'addtodo',
    data(){
        return {
            title:'',
            // detail:'',
            // duedate:''
        }
    },
    methods:{
        ...mapActions(['AddTodo']),
        add(){
            // e.preventDefaults()
            this.AddTodo(this.title)
            this.title = ''
        },
        reset(){
            this.title = ''
            this.detail = ''
            this.duedate = ''
        }
    }

}
</script>

<style>

</style>
