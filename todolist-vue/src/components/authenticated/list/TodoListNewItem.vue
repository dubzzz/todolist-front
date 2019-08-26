<template>
  <div id="add-new-task">
    <md-field id="add-new-task-field">
      <label>Add a new todo</label>
      <md-input v-model="taskName"></md-input>
    </md-field>
    <md-button v-if="!ready">
      <md-icon>refresh</md-icon>
    </md-button>
    <md-button v-bind:disabled="!canAddTodo" v-on:click="addTodo()">Add</md-button>
  </div>
</template>

<script>
export default {
  name: "TodoListNewItem",
  props: { ready: Boolean },
  data: () => ({ taskName: "" }),
  computed: {
    canAddTodo() {
      return this.taskName.length > 0;
    },
    token() {
      return this.$store.state.authentication.token;
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch("todolist/tryAddTodoAction", {
        token: this.token,
        task: this.taskName
      });
    }
  }
};
</script>

<style scoped>
#add-new-task {
  display: flex;
}
#add-new-task-field {
  flex: 1;
}
</style>
