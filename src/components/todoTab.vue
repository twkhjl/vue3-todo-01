<script setup>

import { ref, onMounted, computed, watch, provide } from 'vue'
import { useTodoStore } from '../stores/todo';

import Tab from './elements/tab.vue';

const todoStore = useTodoStore();

let todoFilter = ref('all');

let tabText=ref(['ALL','PENDING','DONE']);


function changeTodoFilter(filter) {
  todoFilter.value = filter;
  todoStore.changeTodoFilter(todoFilter.value);
}

</script>

<template>
  <div class="flex">
    <Tab :text="tabText[0]" :tab-filter-name="'all'" :icon-class="'fa-solid fa-circle-info'"
    @on-click-tab-event="changeTodoFilter"></Tab>
    <Tab :text="tabText[1]" :tab-filter-name="'pending'" :icon-class="'fa-solid fa-hourglass-half'"
    @on-click-tab-event="changeTodoFilter"></Tab>
    <Tab :text="tabText[2]" :tab-filter-name="'done'"  :icon-class="'fa-solid fa-check'"
    @on-click-tab-event="changeTodoFilter"></Tab>

    <!-- <div @click="changeTodoFilter('all')"
      :class="[todoStore.currentFilter=='all'?['bg-teal-600']:'bg-teal-900']"
      class="h-[10vh] w-[calc(100%/3)] 
      border-r-2 border-teal-200 last:border-r-0 
      text-center leading-[10vh] text-white hover:bg-teal-400 hover:text-black">
      <i class="fa-solid fa-circle-info"></i><span class="ml-2">ALL</span>
    </div> -->
    <!-- <div @click="changeTodoFilter('pending')"
      :class="[todoStore.currentFilter=='pending'?['bg-teal-600']:'bg-teal-900']" class="h-[10vh] w-[calc(100%/3)] 
      border-r-2 border-teal-200 last:border-r-0 
      text-center leading-[10vh] text-white hover:bg-teal-400 hover:text-black">
      <i class="fa-solid fa-hourglass-half"></i><span class="ml-2">PENDING</span>
    </div>
    <div @click="changeTodoFilter('done')" :class="[todoStore.currentFilter=='done'?['bg-teal-600']:'bg-teal-900']"
      class="h-[10vh] w-[calc(100%/3)] 
      border-r-2 border-teal-200 last:border-r-0
      text-center leading-[10vh] text-white hover:bg-teal-400 hover:text-black">
      <i class="fa-solid fa-check"></i><span class="ml-2">DONE</span>
    </div> -->

  </div>
</template>