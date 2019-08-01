<template>
  <div class="home">
    <h1>todos</h1>
    <addTodo/>
    <div class="todos"> 
    <div class="todo" v-for="(todo,index) in todos" :key="index">
      {{todo.title}}
      <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i> 
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import addTodo from './addtodo'
export default {
  name: 'home',
  components:{
    addTodo
  },
  methods:{
    ...mapActions(['fetchTodos','deleteTodo']),
  },
  computed: mapGetters(['todos']),
  created(){
    this.fetchTodos();
  }
}
</script>
<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
  background: #eaeaea;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: red;
}
</style>
