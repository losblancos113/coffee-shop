<template>
  <el-container class="box-container">
    <el-row type="flex" justify="center" align="middle" class="max-width">
      <el-col class="box-login" :xs="24" :sm="14" :md="10" :lg="6" :xl="6" :span="2" :offset-lg="1">
        <el-form ref="formLogin" :rules="rules2" :model="formLogin" label-width="120px">
          <h3 class="title">Đăng Nhập</h3>
          <el-form-item label="ID/Email">
            <el-input type="text" v-model="formLogin.username" auto-complete="one" placeholder="Tên đăng nhập"></el-input>
          </el-form-item>
          <el-form-item label="Mật khẩu">
            <el-input type="password" v-model="formLogin.password" auto-complete="off" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">Login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
</el-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { requestLogin } from '@/api/api'
import { Button, Row, Col, Container, Card, Form, FormItem, Input, Message } from 'element-ui'
export default {
  name: 'LoginPage',
  computed: mapGetters(['login_status']),
  data () {
    return {
      logining: false,
      formLogin: {
        username: '',
        password: ''
      },
      rules2: {
        email: [
          { required: true, message: 'ID/Email không được bỏ trống', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Chưa nhập mật khẩu', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    'el-button': Button,
    'el-row': Row,
    'el-container': Container,
    'el-card': Card,
    'el-col': Col,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input
  },
  methods: {
    ...mapActions(['toggleLoginStatus']),
    handleSubmit (ev) {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.logining = true
          var loginParams = { email: this.formLogin.username, password: this.formLogin.password }
          requestLogin(loginParams).then(res => {
            this.logining = false
            let { status, data } = res
            if (status !== 200) {
              Message({
                message: data.error.message,
                type: 'error'
              })
            } else {
              let { id, ttl, userId } = data
              sessionStorage.setItem('user', JSON.stringify({token: id, userId: userId, ttl: ttl}))
              this.toggleLoginStatus()
              this.$router.push({ path: '/dashboard' })
            }
          }).catch(error => {
            this.logining = false
            let { statusCode, message } = error.response.data.error
            if (statusCode !== 200) {
              Message({
                message: message,
                type: 'error'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style>
  .max-width {
    width: 100%
  }
  .box-container{
    width: 100%;
    height: 600px
  }
  .bg-purple {
    background: #d3dce6;
  }
  .box-login {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 10px
  }
  .title {
    text-align: center;
    color: #303133
  }
</style>
