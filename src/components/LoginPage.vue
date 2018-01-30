<template>
  <el-container class="box-container">
    <el-row type="flex" justify="center" align="middle" class="max-width">
      <el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="1" :span="2" :offset-lg="1">
        <el-card class="box-card">
          <div slot="header" class="login-panel-header">
            <span>Đăng Nhập</span>
          </div>
          <div>

          </div>
        </el-card>
      </el-col>
    </el-row>
</el-container>
</template>
<script>
import { Button, Row, Col, Container, Card } from 'element-ui'
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'el-button': Button,
    'el-row': Row,
    'el-container': Container,
    'el-card': Card,
    'el-col': Col
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
  .box-card {
    width: 100%
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .login-panel-header {
    text-align: center;
    background-color: #409EFF
  }
  /* .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } */
</style>
