<script setup>
import { ref, onMounted, computed, watch } from 'vue'

import { useTodoStore } from '../stores/todo'
import BtnAddTodo from './btnAddTodo.vue';
import TodoTab from './todoTab.vue';
import todoItem from './todoItem.vue';


const todos = useTodoStore();

onMounted(() => {

  if (localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos')).rawItems) {
    let storedValue = JSON.parse(localStorage.getItem('todos')).rawItems;
    todos.setItems(storedValue);
  }

})

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {
  deep: true
})


</script>

<template>


  <div class="
  bg-[url('bg.jpg')] bg-cover
  fixed top-0 left-0 -z-10
  mx-auto
  w-auto h-auto min-w-full min-h-full
  "></div>

  <div class="w-[100%] mx-auto sm:w-[60%]">
    <div class="mt-4 text-center text-4xl text-white font-extralight">TODO LIST</div>


    <BtnAddTodo></BtnAddTodo>

    <div class="m-2 flex flex-col">
      <!-- tab -->
      <TodoTab></TodoTab>
      <!-- /tab -->

      <!-- todolists -->
      <div class="
    bg-teal-600 py-4 
    ">
        <div v-for="(item,index) in todos.items_filter">
          <todoItem :item="item" :index="index"></todoItem>
        </div>
      </div>
      <!-- /todolists -->
    </div>

  </div>




</template>


