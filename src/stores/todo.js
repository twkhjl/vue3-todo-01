// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    rawItems: []
  }),
  getters: {
    items: (state) => {
      return state.rawItems;
    }
  },

  

  actions: {

    /**
     * Add todo item
     * @param {string} name
     */
    addItem(name) {
      this.rawItems.push({
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
      
      this.rawItems[index].content=content;

    },
    seetItems(todos){
      this.rawItems=todos;

    }
    


  },
})


