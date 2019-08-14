<template>
  <md-card>
    <md-card-content class="todo-wrapper">
      <md-checkbox v-bind:checked="content.done" v-bind:disabled="syncState !== 'noop'"></md-checkbox>
      <span
        class="todo-label"
        v-bind:class="{ remove: (syncState === 'remove'), noaction: (syncState !== 'noop') }"
      >{{content.task}}</span>
      <md-button v-if="syncState !== 'noop'">
        <md-icon>refresh</md-icon>
      </md-button>
      <md-button>
        <md-icon>delete</md-icon>
      </md-button>
    </md-card-content>
  </md-card>
</template>

<script>
import Vue from "vue";
import {
  MdButton,
  MdCard,
  MdCheckbox,
  MdIcon
} from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdCheckbox);
Vue.use(MdIcon);

export default {
  name: "TodoListListEntry",
  props: { syncState: String, content: Object }
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
