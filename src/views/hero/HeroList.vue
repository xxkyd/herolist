<template>
    	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					<h2 class="sub-header">英雄列表</h2>
					<!-- <a class="btn btn-success" href="add.html">添加</a> -->
                    <router-link class="btn btn-success" :to="{name:'heroadd'}">添加</router-link>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>#</th>
									<th>姓名</th>
									<th>性别</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
                                <tr v-for="(item,index) in list" :key="item.id">
									<td>{{ index + 1 }}</td>
									<td>{{ item.name }}</td>
									<td>{{ item.gender }}</td>
									<td>
										<!-- <a href="edit.html">edit</a> -->
                                        <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
										&nbsp;&nbsp;
										<a href="javascript:" @click="del(item.id)">删除</a>
									</td>
								</tr>
                            </tbody>
						</table>
					</div>
				</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    // 页面重载显示数据
    mounted() {
        this.loadData();
    },
    methods:{
        // 显示英雄列表数据
        loadData(){
            this.axios
                .get('heroes')
                .then((res)=>{
                    console.log(res)
                    const {data,status} = res
                    if(status === 200){
                        this.list = data;
                    }else{
                        console.log('获取失败');
                    }
                })
                .catch((err)=>{
                    console.log('服务器错误'+err);
                })
        },
        // 删除英雄列表数据
        del(id){
            // 弹框提示是否删除
            if(!confirm('确实是否删除该英雄')){
                return false;
            }
            this.axios
                .delete(`heroes/${id}`)
                .then((res)=>{
                    // console.log(res);
                    const status = res.status;
                    if(status === 200){
                        this.loadData();
                    }else{
                        console.log('删除失败');
                    }
                })
                .catch((err)=>{
                    console.log('服务器错误' + err);
                })
        }
    }
}
</script>

<style>

</style>
