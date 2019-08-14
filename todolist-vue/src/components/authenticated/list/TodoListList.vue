<template>
  <div>
    <TodoListListEntry
      v-for="t in todos"
      v-bind:key="t.data.guid"
      v-bind:syncState="t.state"
      v-bind:content="t.data"
    ></TodoListListEntry>
  </div>
</template>

<script>
import TodoListListEntry from "./TodoListListEntry";

export default {
  name: "TodoListList",
  components: { TodoListListEntry },
  props: { todos: Array }
};
</script>

<style scoped>
</style>
