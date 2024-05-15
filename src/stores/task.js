import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [{
            id: 1,
            name: "First sample task for Pinia",
            is_completed: false
        }, {
            id: 2,
            name: "Second sample task for Pinia",
            is_completed: true
        }],
        task: {
            id: 1,
            name: "First task",
            is_completed: false
        },
    }),
    getters: {
        completed: (state) => state.tasks.filter((task) => task.is_completed),
        uncompleted () {
            return this.tasks.filter((task) => !task.is_completed)
        },
        uncompletedCount () {
            return this.uncompleted.length
        },
    },
    
});