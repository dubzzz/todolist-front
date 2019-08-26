<template>
  <md-card>
    <md-card-content class="todo-wrapper">
      <md-checkbox
        v-bind:value.sync="!content.done"
        v-bind:disabled="!canEdit"
        v-on:change="toggleTodo()"
      ></md-checkbox>
      <span
        class="todo-label"
        v-bind:class="{ remove: onGoingRemoval, noaction:!canEdit }"
      >{{content.task}}</span>
      <md-button v-if="!canEdit">
        <md-icon>refresh</md-icon>
      </md-button>
      <md-button v-on:click="removeTodo()">
        <md-icon>delete</md-icon>
      </md-button>
    </md-card-content>
  </md-card>
</template>

<script>
import { TodoState } from "../../../store/models/todolist";

export default {
  name: "TodoListListEntry",
  props: { syncState: String, content: Object },
  computed: {
    canEdit() {
      return this.syncState === TodoState.Noop;
    },
    onGoingRemoval() {
      return this.syncState === TodoState.Remove;
    }
  },
  methods: {
    toggleTodo() {
      const token = this.$store.state.authentication.token;
      this.$store.dispatch("todolist/tryToggleTodoAction", {
        token,
        guid: this.content.guid
      });
    },
    removeTodo() {
      const token = this.$store.state.authentication.token;
      this.$store.dispatch("todolist/tryRemoveTodoAction", {
        token,
        guid: this.content.guid
      });
    }
  }
};
</script>

<style scoped>
.todo-wrapper {
  display: flex;
  align-items: center;
}
.todo-label {
  flex-grow: 1;
  margin-left: 14px;
}
.todo-label.noaction {
  color: #777;
}
.todo-label.remove {
  text-decoration: line-through;
}
</style>
