// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    itemIndex:1,
    rawItems: [],
    filter:'all',
  }),
  getters: {

    currentFilter:(state)=>{
      return state.filter;
    },
    items: (state) => {
      return state.rawItems;
    },

    items_filter: (state) => {
      if(state.filter=='all'){
      return state.rawItems;
      }
      return state.rawItems.filter(v => v.status == state.filter);
    }

  },



  actions: {

    /**
     * Add todo item
     * @param {string} name
     */
    addItem(name) {
      this.rawItems.unshift({
        index:this.itemIndex,
        content: name,
        status: 'pending'
      });
      this.itemIndex+=1;
    },

    /**
     * Remove item from todo
     * @param {number} index
     */
    removeTodo(index) {
      this.rawItems= this.rawItems.filter(v=>v.index!==index);
    },

    /**
     * update todo item
     * @param {number} index
     * @param {string} content
     */

    updateTodo(index, content) {
      let arrIdx = this.rawItems.findIndex(v=>v.index==index);
      this.rawItems[arrIdx].content = content;

    },
    toggleTodoItemStatus(index, status) {
      let arrIdx = this.rawItems.findIndex(v=>v.index==index);

      if (status == 'pending') {
        this.rawItems[arrIdx].status = 'done';
        return;
      }
      this.rawItems[arrIdx].status = 'pending';
    },
    changeTodoFilter(filter){
      this.filter=filter;
    },
    setItems(todos) {
      this.rawItems = todos;

    }



  },
})


