<template>
  <div id="app">
    <ToDo :todos="todos" @delete-todo="deleteToDo" @move-up="moveUp" @move-down="moveDown"/>
    <ToDoForm v-if="showToDoForm" @add-todo-finish="addToDoFinish" />
    <button v-else @click="addToDoStart()">Добавить</button> <br />
    <button @click="sendJsonThroughAxios()" id="button2"> Отправить</button>
    <transition name="fade"><div id="fade" v-if="showSuccess">Успешно!</div></transition>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import ToDoForm from './components/ToDoForm.vue'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return {
      todos: [
        {
          "task": "Насрать в биде",
          "description":
            "Спиздил работу у Станиславского",
          "deadline": {
            "year": "2019",
            "month": "Января",
            "month-number": "01",
            "day": "01",
            "hour": "12",
            "minute": "21"
          }
        },
        {
          "task": "Взломать МЛ",
          "description":
            "Я бог всех украинцев на Земле и на Нибиру. А ты когда-нибудь задумывался, насколько мы, люди, ничтожны и ничего не знаем?",
          "deadline": {
            "year": "2019",
            "month": "Марта",
            "month-number": "03",
            "day": "01",
            "hour": "12",
            "minute": "21"
          }
        }
      ],
      showToDoForm: false,
      showSuccess: false
    }
  },
  components: {
    ToDo,
    ToDoForm
  },
  methods: {
    deleteToDo(index){
      this.todos.splice(index, 1);
    },
    addToDoStart(){
      this.showToDoForm = true;
    },
    addToDoFinish(todoNew){
      if (todoNew.task != '' && todoNew.deadline != '') this.todos.push(todoNew);
      this.showToDoForm = false;
    },
    sendJsonThroughAxios(){
      const str = JSON.stringify(this.todos);
      axios.post('https://jsonplaceholder.typicode.com/todos/', str)
              .then((response) => {
                console.log(response);
                this.showSuccess = true;
                setTimeout(() => this.showSuccess = false, 3000);
              })
              .catch((error) => {
                console.log(error);
                alert('An axios error has occurred.');
              });
    },
    moveUp(index){
      let temp = this.todos[index];
      this.todos[index] = this.todos[index - 1];
      this.todos[index - 1] = temp;
      this.todos.splice(0, 0);
    },
    moveDown(index){
      let temp = this.todos[index];
      this.todos[index] = this.todos[index + 1];
      this.todos[index + 1] = temp;
      this.todos.splice(0, 0);
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<style scoped>
  button {
    margin-left: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  #button2{
    margin-top: 5px;
  }
  #fade {
    margin-left: 20px;
  }
</style>


