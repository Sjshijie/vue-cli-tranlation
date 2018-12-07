import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count:10,
  hehe:"你sdfdsf",
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}
const getters = {
  getTodosDone(state){
    return state.todos.filter((todo) => todo.done)
  }
}

export default new Vuex.Store({
  state,
  mutations: {},
  getters,
  actions: {}
});
