<template>
	<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item" class="shadow">
				<span class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}" 
				@click="toggleComplete(todoItem, index)">
				<i class="fas fa-check"></i>
				</span>
				<span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
				<span class="removeBtn" @click="removeTodo(todoItem, index)">
					<i class="fas fa-times"></i>
				</span>
			</li>
	</transition-group>
</template>

<script>
export default{
	
	methods: {
		removeTodo(todoItem, index){
			// const payload = {
			// 	todoItem,
			// 	index
			// }
			this.$store.commit('removeOneItem', {todoItem, index});
		},
		toggleComplete(todoItem, index){
			this.$store.commit('toggleOneItem', {todoItem, index});
		}
	},
	
	
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
	/* 리스트 아이템 트렌지션 효과 */
	.list-enter-active, .list-leave-active {
  		transition: all 1s;
	}
	.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  		opacity: 0;
  		transform: translateY(30px);
	}
</style>