import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia";
import { allTasks } from "../http/task-api";

const tmp = {
    state: () => ({
        
    }),
    getters: {
        
    },

    actions: {
        
    },
    
}

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([])

    const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed))
    const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed))

    const fetchAllTasks = async () => {
        // this.tasks = [{
        //     id: 1,
        //     name: "First sample task for Pinia",
        //     is_completed: false
        // }, {
        //     id: 2,
        //     name: "Second sample task for Pinia",
        //     is_completed: true
        // }]
        const { data } = await allTasks();
        this.tasks = data.data;
    }

    return {
        tasks, completedTasks, uncompletedTasks, fetchAllTasks
    }
});