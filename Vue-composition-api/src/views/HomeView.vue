<script setup>
import { ref, computed } from 'vue'

const header = ref('To-do list')

// const characterCount = computed(()=>{
//   return newTodo.value.length
// })

const editing = ref(false)

const todos = ref([
  {
    id:1, 
    label:"Read emails", 
    purchased: true,
    highPriority: true,
  },
  {
    id:2, 
    label:"Job interviews", 
    purchased: false,
    highPriority: true,
  },
  {
    id:3, 
    label:"Job interviews", 
    purchased: true,
    highPriority: false,
  },
  {
    id:4, 
    label:"Code 3 hours", 
    purchased: false,
    highPriority: false,
  },
  {
    id:5, 
    label:"Learning something new", 
    purchased: true,
    highPriority: false,
  },
  {
    id:6, 
    label:"Vue best pratices", 
    purchased: false,
    highPriority: true,
  },
])

const reversedTodos = computed(() => 
  // revers array 
  [...todos.value].reverse()
)

const newTodo = ref("")
const newTodoHighPriority = ref("false")

const addTodo = () => {
  todos.value.push(
    {
      id: todos.value.length + 1, 
      label: newTodo.value,
      highPriority: newTodoHighPriority.value
    })
  newTodo.value = ""
  newTodoHighPriority.value = ""
}

const doEdit = (e) =>{
  editing.value = e
  newTodo.value = ""
  newTodoHighPriority.value = ""
}

const togglePurchased = (todo) => {
  todo.purchased = !todo.purchased
}
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
  </div>

  <button v-if="editing" @click="doEdit(false)" class="btn btn-cancel">
    cancel
  </button>
  
  <button v-else @click="doEdit(true)" class="btn btn-add">
    Add 
  </button>
  
  <form 
    class="add-item-form"
    v-if="editing"
    @submit.prevent="addTodo"
  >
    <input 
      v-model.trim="newTodo"  
      type="text" 
      placeholder="Add to-do"
      class="input"
    >
    <label>
      <input type="checkbox" v-model="newTodoHighPriority">
      High Priority
    </label>
    <button 
      class="btn btn-todo"
      :disabled="newTodo.length === 0"
    >
      Add To-do
    </button>
  </form>

  <!-- <p class="counter">
    {{ characterCount }}//100
  </p> -->
  
  <ul>
    <li 
      v-for="(todo, index) in reversedTodos" 
      @click="togglePurchased(todo)"
      :key="todo.id"
      :class="{
        strikeout: todo.purchased,
        highPriority: todo.highPriority,
      }"
    >
      {{ todo.label }}
    </li>
  </ul>

  <p v-if="!todos.length">
    To-do is empty! 🤩
  </p>
</template>

<style scoped>
.header {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #41b883;
}

.btn {
  padding: 0.5rem;
  cursor: pointer;
  border: none;
}
.btn-cancel {
  background-color: rgb(209, 81, 81);
  color: white;
}

.btn-add {
  background-color: rgb(143, 143, 143);
  color: black;
}

.btn-todo:hover {
  background-color: #41b883;
  color: black;
}

form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.input {
  padding: 1rem;
}

ul {
  cursor: pointer;
}

li {
  padding: 1rem 0;
}
 
li:hover {
  transition: all 0.3s ease-in-out;
}

.strikeout {
  text-decoration: line-through;
  color: #41b883;
}

.highPriority {
  color: #64a7eb;
}

/* .counter {
  margin-top: 1rem;
  color: #41b883;
} */
</style>