<template lang="html">
  <el-form :model="formCate" label-width="100px">
    <el-form-item label="Tên">
      <el-input v-model="formCate.name" placeholder="Nhập tên danh mục"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="onSubmit()">Tạo</el-button>
      <el-button @click="reset()">Tạo lại</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, Button, Input, FormItem } from 'element-ui'
import { addCategory, updateCategory } from '@/api/api'
export default {
  name: 'category-detail',
  props: ['category', 'mode_p'],
  data () {
    return {
      formCate: {
        name: ''
      },
      mode: {
        insert: true,
        edit: false
      }
    }
  },
  components: {
    'el-form': Form,
    'el-button': Button,
    'el-input': Input,
    'el-form-item': FormItem
  },
  methods: {
    onSubmit () {
      if (this.mode.insert) {
        this.processAddCate()
      } else if (this.mode.edit) {
        this.processUpdateCate()
      }
    },
    processAddCate () {
      addCategory(this.formCate).then(res => {
        let { status, data } = res
        console.log(status)
        console.log(data)
      }).catch(error => {
        console.error(error)
      })
    },
    processUpdateCate () {
      updateCategory(this.formCate).then(res => {
        let { status, data } = res
        console.log(status)
        console.log(data)
      }).catch(error => {
        console.error(error)
      })
    },
    reset () {
      this.formCate.name = ''
    }
  },
  updated () {
    if (this.category != null) {
      this.formCate.name = this.category.name
    }
    if (this.mode_p != null) {
      this.mode = this.mode_p
    }
    console.log(this.mode_p)
  }
}
</script>

<style lang="css">
</style>
