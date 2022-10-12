<script setup>

import {useTodoStore} from '../stores/todo'
import { ref, onMounted, computed, watch } from 'vue'


const todo = useTodoStore();

const  name=ref('');

function addTodo(){
  todo.addItem(name.value);
  name.value='';
}
</script>



<template>

  type todo content here
  <input v-model="name"
  type="text" 
  class="outline-none h-[5vh] w-[25vw] rounded-sm border-4 px-2 border-teal-500">
  <button @click="addTodo()"
  class="bg-black text-white w-[20vw] h-10"
  >add todo</button>
</template>