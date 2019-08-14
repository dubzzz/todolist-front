<template>
  <div>
    <TodoListNewItem v-bind:ready="ready"></TodoListNewItem>
    <TodoListList v-bind:todos="todos"></TodoListList>
  </div>
</template>

<script>
import TodoListNewItem from "./TodoListNewItem";
import TodoListList from "./TodoListList";

export default {
  name: "TodoListPage",
  components: { TodoListNewItem, TodoListList },
  computed: {
    ready() {
      return false;
    },
    todos() {
      return [
        { data: { guid: "guid", task: "task", done: false }, state: "state" },
        { data: { guid: "guid", task: "task", done: false }, state: "state" }
      ];
    }
  }
};
</script>

<style scoped>
</style>
