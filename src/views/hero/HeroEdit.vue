<template>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtname">姓名</label>
            <input type="text" class="form-control" v-model="formData.name" id="txtname" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <select class="form-control" id="gender" v-model="formData.gender">
                <option value="男">男</option>
                <option value="女">女</option>

            </select>
          </div>
          <!-- button就是提交按钮 -->
          <!-- prevent事件修饰符，阻止默认行为 -->
          <button @click.prevent="heroedit" class="btn btn-success">提交</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data(){
        return{
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    mounted() {
        this.getHeroById();
    },
    methods: {
        getHeroById(){
            this.axios
                .get(`heroes/${this.id}`)
                .then((res) => {
                    const {status,data} = res;
                    if(status === 200){
                        this.formData = data;
                    }else{
                        console.log('数据显示错误');
                    }
                })
                .catch((err)=>{
                    console.log('服务器异常'+err);
                })
        },
        heroedit(){
           this.axios
                .put(`heroes/${this.id}`,this.formData)
                .then((res)=>{
                    const status = res.status;
                    if(status === 200){
                        this.$router.push('/hero');
                    }else{
                        console.log('修改数据失败');
                    }
                })
                .catch((err)=>{
                    console.log('服务器异常'+err)
                })
        }
    },
}
</script>

<style>

</style>
