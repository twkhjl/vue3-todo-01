<script setup>
import { ref, onMounted, computed, watch } from 'vue'

import { useTodoStore } from '../stores/todo'
let todoStore = useTodoStore();

const props = defineProps({
    item: Object,
    index: Number,
})

let editable = ref(false);

let input_edit_item=ref(null);
let str_old_input=ref(null);

const newVal=ref('');

function removeTodo(idx) {
    todoStore.removeTodo(idx);
}


function setOldInput(){
    str_old_input=input_edit_item.value.value;
}
function updateTodo(index,content){
    if(str_old_input==input_edit_item.value.value) {
         this.editable=!this.editable;
        return;
    }
    let newContent= input_edit_item.value.value;
    todoStore.updateTodo(index,newContent);
    
    this.editable=!this.editable;

}



</script>

<template>

    <div class="m-2 h-10 w-auto rounded-lg bg-white mb-4">
        <div class="flex rounded-lg border-[0.5px] border-gray-400 py-[5px] pl-2 shadow-sm shadow-black">

            <template v-if="!editable">
                <i class="fa-regular fa-square-check pt-1 text-2xl"></i>
                <span class="ml-2 w-full text-2xl">{{ item.content }}</span>
                <i @click="editable=!editable"
                class="fa-regular fa-pen-to-square pt-1 mr-2 text-2xl"></i>
                <i @click="removeTodo(index)" class="fa-regular fa-trash-can pt-1 mr-2 text-2xl cursor-pointer"></i>
            </template>

            <template v-if="editable">
                <input :value="item.content" ref="input_edit_item" @focus="setOldInput()"
                type="text" class="ml-2 px-2 w-[80%] text-xl border-[1px] border-gray-200 rounded-lg outline-none
              shadow-inner shadow-black">
                <i @click="updateTodo(index)"
                class="fa-solid fa-check pt-1 mx-2 text-2xl"></i>
                <i @click="editable=!editable"
                class="fa-solid fa-xmark pt-1 mr-2 text-2xl"></i>
            </template>

        </div>
    </div>

</template>