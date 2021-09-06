<template>
	<ul>
		<li v-for="(todoItem,index) in todoItems" v-bind:key="todoItem" class="shadow">
			<i class="fas fa-check checkBtn" v-on:click="toggleComplete"></i>
			{{todoItem}}
			<span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
				<i class="fas fa-times"></i>
			</span>
		</li>
	</ul>
</template>

<script>
export default{
	data: function(){
		return {
			todoItems: []
		}
	},
	
	methods: {
		removeTodo: function(todoItem, index){
			localStorage.removeItem(todoItem);
			this.todoItems.splice(index, 1);
		},
		toggleComplete: function(){
			
		}
	},
	
	created: function(){
		if(localStorage.length > 0){
			for(let i=0; i < localStorage.length; i++){
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
					console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
					// this.todoItems.push(localStorage.key(i));
				}
			
			}
		}
	}
}
</script>

<style scoped>
	ul{
		list-style-type: none;
		padding-left: 0px;
		text-align: left;
		margin-top: 0;
	}
	li{
		display:flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}
	.checkBtn{
		line-height: 45px;
		color: #2ecc71;
		margin-right: 5px;
	}
	.checkBtnCompleted{
		color: #b3adad;
	}
	.textCompleted{
		text-decoration: line-through;
		color: #b3adad;
	}
	.removeBtn{
		margin-left: auto;
		color:#de4343;
	}
</style>