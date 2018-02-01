<template>
<el-container>
  <el-header>
    <my-header></my-header>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>
<script>
import { Header, Aside, Main, Container } from 'element-ui'
import MyHeader from '@/components/Header.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'This is Dashboard page'
    }
  },
  components: {
    'el-header': Header,
    'el-aside': Aside,
    'el-main': Main,
    'el-container': Container,
    'my-header': MyHeader
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  margin: 0px
}
</style>
