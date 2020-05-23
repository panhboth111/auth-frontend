<template>
  <v-container>
    <v-card>
      <v-container>
        <v-form>
          <v-text-field label="name" v-model="newTodo.name"></v-text-field>
          <v-text-field
            label="description"
            v-model="newTodo.description"
          ></v-text-field>
          <v-btn @click="addTODO">add</v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="3"
        xl="4"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <v-card>
          <v-container>
            <v-card-title>{{ todo.name }}</v-card-title>
            <v-card-subtitle>{{ todo.description }}</v-card-subtitle>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { addTodo, getTodo } from "../backend";
export default {
  name: "Home",
  components: {},
  data: () => ({
    todos: [],
    newTodo: {
      name: null,
      description: null,
    },
  }),
  methods: {
    async addTODO() {
      const response = await addTodo(this.newTodo);
      alert(response.msg);
      if (response.success) {
        this.todos = [...this.todos, response.data];
      }
    },
    async getTODO() {
      const response = await getTodo();
      if (response.success) {
        this.todos = response.data;
      }
    },
  },
  created() {
    this.getTODO();
  },
};
</script>
