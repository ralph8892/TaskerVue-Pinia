<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask />
                    

                    <!-- List of incomplete tasks -->

                    <Tasks :tasks="uncompletedTasks" />

                    <!-- Show toggle button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" @click="$event => showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed Tasks</span>
                            <span v-else>Hide Completed Tasks</span>
                        </button>
                    </div>
                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { computed, onMounted, ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useTaskStore } from "../stores/task";
    // import { allTasks, createTask, updateTask, completeTask, removeTask } from "../http/task-api";
    import Tasks from "../components/tasks/Tasks.vue";
    import NewTask from "../components/tasks/NewTask.vue";

    const store = useTaskStore()
    // const { task } = storeToRefs(store)
    
    // Getters V1
    // const { completed, uncompleted, uncompletedCount } = storeToRefs(store)

    // Getters V2
    const { completedTasks, uncompletedTasks } = storeToRefs(store)
    const { fetchAllTasks } = store
    // store.task.name = "First task is already updated"
    // store.task.is_completed = true
    // store.$patch({
    //     task: {
    //         name: "First task updated using $patch",
    //         is_completed: true
    //     }
    // })

    onMounted(async () => {
        // const { data } = await allTasks()
        // tasks.value = data.data
        await fetchAllTasks()
        // tasks.value = data.data.filter(task => task.is_completed)
        // console.log(store.task)
        // console.log(task)
        // console.log(task.value)

        // Getters V1
        // console.log(store.completed)
        // console.log(store.uncompleted)
        // console.log(store.uncompletedCount)

        // Getters V2
        // console.log(completed.value)
        // console.log(uncompleted.value)
        // console.log(uncompletedCount.value)
    })

    // Getters V2
    // const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
    // const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
    const showToggleCompletedBtn = computed(() => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)
    const completedTasksIsVisible = computed(() => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0)
    const showCompletedTasks = ref(false)

</script>