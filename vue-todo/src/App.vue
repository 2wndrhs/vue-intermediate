<template>
  <div id="app">
	  <TodoHeader></TodoHeader>
	  <TodoInput v-on:addTodoItem = "addOneItem"></TodoInput>
	  <TodoList v-bind:propsdata = "todoItems" 
				@removeTodoItem="removeOneItem" 
				@toggleTodoItem="toggleOneItem"></TodoList>
	  <TodoFooter @clearTodoItem="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
	data: function(){
		return {
			todoItems: [],
		}
	},
	
	methods: {
		addOneItem: function(newTodoItem) {
			const obj = {completed: false, item: newTodoItem};
			localStorage.setItem(newTodoItem, JSON.stringify(obj));
			this.todoItems.push(obj);
		},
		removeOneItem: function(todoItem, index){
			localStorage.removeItem(todoItem.item);
			this.todoItems.splice(index, 1);
		},
		toggleOneItem: function(todoItem, index){
			// todoItem.completed = !todoItem.completed;
			this.todoItems[index].completed = !this.todoItems[index].completed
			//로컬 스토리지의 데이터를 갱신
			localStorage.removeItem(todoItem.item);
			localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
		},
		clearAllItems: function(){
			this.todoItems = [];
			localStorage.clear();
		}
	}
	,
	created: function(){
		if(localStorage.length > 0){
			for(let i=0; i < localStorage.length; i++){
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
					this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
					// this.todoItems.push(localStorage.key(i));
				}
			
			}
		}
	},
	
	components: {
		TodoHeader,
		TodoList,
		TodoInput,
		TodoFooter
	}
}
</script>

<style>
	body {
		text-align: center;
		background-color: #F6F6F6;
	}
	
	input {
		border-style: groove;
		width: 80%;
	}
	
	button{
		border-style: groove;
	}
	
	.shadow{
		box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
	}
</style>
