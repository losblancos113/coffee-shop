<template lang="html">
  <el-form :model="formCate" label-width="100px">
    <el-form-item label="Tên">
      <el-input v-model="formCate.name" placeholder="Nhập tên danh mục"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Tạo</el-button>
      <el-button>Tạo lại</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, Button, Input, FormItem } from 'element-ui'
export default {
  name: 'category-detail',
  data () {
    return {
      formCate: {
        name: ''
      }
    }
  },
  components: {
    'el-from': Form,
    'el-button': Button,
    'el-input': Input,
    'el-form-item': FormItem
  },
  methods: {
    onSubmit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="css">
</style>
