<template>
    <div class="container py-5">
        <h1>404</h1>
        <p>Sorry, the page <code>{{ $route.params.notFound }}</code> you're looking for does not exist!</p>
        <router-link :to="{ name: 'tasks' }">Back to Tasks Page</router-link>
    </div>
</template>