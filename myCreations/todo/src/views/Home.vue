<template>
  <div class="home">
    {{ title }}
    <ul style="list-style-type:none">
      <li v-for="(todoObj, id) in todoList">
       <input type="checkbox" v-model.lazy="todoObj.isChecked"> {{ todoObj.todo }} 
      </li>
    </ul>
    <form v-on:submit.prevent="addTodo">
      <input v-model="newTodo" id="todo"/> 
      <button type="submit"> Submit </button>
    </form>
    <!-- </form> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  el: '#els',
  data(){
    return {
      title: "Todo List",
      todoList: [{todo: 'ten', isChecked: false}, {todo: 'eleven', isChecked: false}],
      newTodo: 'Enter Todo Here'
    }
  },
  methods: {
    toggleChecked: function(id){
      let newTodoList = this.todoList
      newTodoList[id].isChecked = !newTodoList[id].isChecked
      this.todoList = newTodoList
    }
  },
  computed: {
    addTodo: function(){
      let newTodoList =  this.todoList
      newTodoList.push({todo: this.newTodo, checked: false})
      this.todoList = newTodoList
    }
  }
}
</script>
