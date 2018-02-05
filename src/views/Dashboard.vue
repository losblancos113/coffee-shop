<template>
<el-container>
  <el-header>
    <my-header></my-header>
  </el-header>
  <el-container>
    <transition name="animate-slide" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <el-aside v-if="show_left_sidebar">
        <side-bar></side-bar>
      </el-aside>
    </transition>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>
<script>
import { Header, Aside, Main, Container } from 'element-ui'
import { mapGetters } from 'vuex'
import MyHeader from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'This is Dashboard page'
    }
  },
  computed: mapGetters(['show_left_sidebar']),
  components: {
    'el-header': Header,
    'el-aside': Aside,
    'el-main': Main,
    'el-container': Container,
    'my-header': MyHeader,
    'side-bar': SideBar
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #333333;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
}

.el-main {
  background-color: #E9EEF3;
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
