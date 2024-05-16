import { defineStore } from "pinia";
import { allTasks } from "../http/task-api";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
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
        },
        // uncompletedCount () {
        //     return this.uncompleted.length
        // },
    },

    actions: {
        async fetchAllTasks () {
            // this.tasks = [{
            //     id: 1,
            //     name: "First sample task for Pinia",
            //     is_completed: false
            // }, {
            //     id: 2,
            //     name: "Second sample task for Pinia",
            //     is_completed: true
            // }]
            const { data } = await allTasks()
            this.tasks = data.data
        },
    },
    
});