<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTodoStore } from '../../stores/todo';

const todoStore = useTodoStore();


const props = defineProps(['text','tabFilterName','iconClass']);

const emits = defineEmits(['onClickTabEvent'])

function changeFilter(){
   emits('onClickTabEvent',props.tabFilterName)
}

</script>

<template>
   <div
      @click="changeFilter()"
      :class="[todoStore.currentFilter==tabFilterName?['bg-teal-600']:'bg-teal-900']"
      class="h-[10vh] w-[calc(100%/3)] 
      border-r-2 border-teal-200 last:border-r-0 
      text-center leading-[10vh] text-white hover:bg-teal-400 hover:text-black">
      <i :class="iconClass"></i><span class="ml-2 text-sm font-extralight">{{ text }}</span>
    </div>
</template>