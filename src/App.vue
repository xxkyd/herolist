<template>
	<div class="front">
		<!-- 头部 -->
		<app-header></app-header>
		<div class="container-fluid">
			<div class="row">
				<!-- 左侧 -->
				<app-silder></app-silder>
				<!-- 右侧 -->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
// 引入AppHeader组件
import AppHeader from './components/AppHeader'
// 引入AppSilder组件
import AppSilder from './components/AppSilder'
export default {
	name: 'app',
	components:{
		AppHeader,
		AppSilder
	},
	data () {
		return {
		}
	}
}
</script>

<style lang="scss">
</style>
