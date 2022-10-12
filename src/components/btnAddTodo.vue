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

<div class="m-2 flex w-auto">
    <input v-model="name"
    class="h-10 w-[80%] rounded-l-lg px-2 shadow-inner shadow-black outline-none" type="text" placeholder="type something here..." />
    <button  @click="addTodo()"
    class="mr-0 h-10 w-[20%] rounded-r-lg bg-teal-600 text-white hover:bg-teal-400">
      <i class="fa-solid fa-plus text-2xl"></i>
    </button>
  </div>


</template>