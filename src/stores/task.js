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
        completedTasks: (state) => state.tasks.filter((task) => task.is_completed),
        uncompletedTasks () {
            return this.tasks.filter((task) => !task.is_completed)
        }
        // uncompletedCount () {
        //     return this.uncompleted.length
        // },
    },
    
});