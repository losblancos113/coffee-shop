<template lang="html">
  <el-form :model="formCate" :rules="rules" ref="formCate" label-width="100px">
    <el-form-item label="Tên" prop="name">
      <el-input v-model="formCate.name" placeholder="Nhập tên danh mục"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="onSubmit('formCate')">OK</el-button>
      <el-button @click="reset('formCate')">Tạo lại</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, Button, Input, FormItem, Message } from 'element-ui'
import { addCategory, updateCategory, getCategoryById } from '@/api/api'
export default {
  name: 'category-detail',
  props: ['category_id'],
  data () {
    return {
      formCate: {
        name: ''
      },
      mode: {
        insert: true,
        edit: false
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Không được bỏ trống',
            trigger: 'blur'
          },
          { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
        ]
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
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.mode.insert) {
            console.log('Inser mode')
            this.processAddCate()
          } else if (this.mode.edit) {
            console.log('Update mode')
            this.processUpdateCate()
          }
        } else {
          console.error('Form is not valid')
        }
      })
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
    reset (formName) {
      this.$refs[formName].resetFields()
    },
    fetchData () {
      // console.log(this.category_id)
      if (this.category_id != null) {
        this.mode = {
          insert: false,
          edit: true
        }
        getCategoryById(this.category_id).then(res => {
          let { status, data } = res
          if (status === 200) {
            this.formCate = data
          } else {
            Message({
              message: data.error.message,
              type: 'error'
            })
          }
        }).catch(error => {
          let { message } = error.response.data.error
          Message({
            message: message,
            type: 'error'
          })
          console.error(error)
        })
      } else {
        this.formCate = {
          name: ''
        }
        this.mode = {
          insert: true,
          edit: false
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next(vm => vm.fetchData())
  }
}
</script>

<style lang="css">
</style>
