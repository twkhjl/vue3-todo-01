<script setup>
import { ref, onMounted, computed, watch } from 'vue'

import { useTodoStore } from '../stores/todo'
import BtnAddTodo from './btnAddTodo.vue';
const todos = useTodoStore();

function removeTodo(idx){
  todos.removeTodo(idx);
}


</script>

<template>
  <div class="text-4xl text-center text-green-800 font-extrabold">TodoList</div>

  <BtnAddTodo></BtnAddTodo>
  <div v-for="(item,index) in todos.items">
    <div>{{ item.content }}</div>
    <button @click="removeTodo(index)">remove todo</button>
  </div>




</template>