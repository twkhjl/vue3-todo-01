// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
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
        content: name,
        status: 'pending'
      });
    },

    /**
     * Remove item from todo
     * @param {number} index
     */
    removeTodo(index) {
      if (index !== -1) this.rawItems.splice(index, 1);
    },

    /**
     * update todo item
     * @param {number} index
     * @param {string} content
     */

    updateTodo(index, content) {

      this.items_filter[index].content=content;
      // this.rawItems[index].content = content;

    },
    toggleTodoItemStatus(index, status) {
      if (status == 'pending') {
        this.rawItems[index].status = 'done';
        return;
      }
      this.rawItems[index].status = 'pending';
    },
    changeTodoFilter(filter){
      this.filter=filter;
    },
    setItems(todos) {
      this.rawItems = todos;

    }



  },
})


