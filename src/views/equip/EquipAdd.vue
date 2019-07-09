<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtname">姓名</label>
        <input
          type="text"
          class="form-control"
          id="txtname"
          v-model="formData.name"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button type="submit" @click.prevent="heroadd" class="btn btn-success">添加</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: "男"
      }
    };
  },
  methods: {
    // 添加
    heroadd() {
      this.axios.post("heroes", this.formData).then(res => {
        const status = res.status;
        if (status === 201) {
          this.$router.push("/hero");
        }
      });
    }
  }
};
</script>

<style>
</style>
