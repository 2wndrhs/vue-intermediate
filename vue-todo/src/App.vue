<template>
  <div id="app">
	  <TodoHeader></TodoHeader>
	  <TodoInput></TodoInput>
	  <TodoList></TodoList>
	  <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
	components: {
		TodoHeader,
		TodoList,
		TodoInput,
		TodoFooter
	}
}
</script>

<style>

</style>
