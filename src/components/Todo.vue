<script setup>
import { ref, onMounted, computed, watch } from 'vue'

import { useTodoStore } from '../stores/todo'
import BtnAddTodo from './btnAddTodo.vue';
import todoItem from './todoItem.vue';
const todos = useTodoStore();


onMounted(() => {
  let storedValue=JSON.parse(localStorage.getItem('todos')).rawItems || [];

	todos.seetItems(storedValue);

})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})


</script>

<template>
  <div class="w-[100%] mx-auto sm:w-[60%]">
    <div class="mt-4 text-center text-4xl font-extralight">TODO LIST</div>


    <BtnAddTodo></BtnAddTodo>

    <div class="m-2 flex flex-col">
      <!-- tab -->
      <div class="flex">
        <div
          class="h-[10vh] w-[calc(100%/3)] border-r-2 border-teal-200 bg-teal-900 text-center leading-[10vh] text-white hover:bg-teal-600">
          <i class="fa-solid fa-circle-info"></i><span class="ml-2">ALL</span></div>
        <div
          class="h-[10vh] w-[calc(100%/3)] border-r-2 border-teal-200 bg-teal-900 text-center leading-[10vh] text-white hover:bg-teal-600">
          <i class="fa-solid fa-hourglass-half"></i><span class="ml-2">PENDING</span></div>
        <div
          class="h-[10vh] w-[calc(100%/3)] border-r-2 border-teal-200 bg-teal-900 text-center leading-[10vh] text-white last:border-r-0 hover:bg-teal-600">
          <i class="fa-solid fa-check"></i><span class="ml-2">DONE</span></div>
      </div>
      <!-- /tab -->

      <!-- todolists -->
    <div class="border-[1px] border-t-0 border-gray-500 bg-gray-100 py-4 shadow-sm shadow-black">
      <div v-for="(item,index) in todos.items">
      <todoItem :item="item" :index="index"></todoItem>
    </div>
    </div>
      <!-- /todolists -->
    </div>

  </div>




</template>