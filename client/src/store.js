import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]
  },
  mutations: {
    setTodos:(state,todos)=>(state.todos = todos),
    newTodo:(state,todo)=>state.todos.unshift(todo),
    deleteTodo:(state,id)=>(state.todos = state.todos.filter(todo => todo.id !== id))
  },
  actions: {
    async fetchTodos({ commit }){
      const response = await Axios.get(`
      https://my-json-server.typicode.com/irfanmaulanasam/product
      `);
      commit('setProducts', response.data) 
    },
    async AddTodo({ commit } ,title){
      const obj = {
        title,
        completed:false
      }
      const response = await Axios.post(`
      https://my-json-server.typicode.com/irfanmaulanasam/product
      `,obj);
      commit('newProduct',response.data)
    },
    async deleteTodo({ commit }, id){
      await Axios.delete(`
      https://my-json-server.typicode.com/irfanmaulanasam/product/${id}
      `,id)
      commit('deleteProduct', id)
    }
  },
  getters:{
    todos:(state)=>{
      return state.products
    }
  }
})
