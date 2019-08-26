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
      return this.$store.state.todolist.ready;
    },
    todos() {
      return this.$store.state.todolist.todos;
    }
  }
};
</script>

<style scoped>
</style>
