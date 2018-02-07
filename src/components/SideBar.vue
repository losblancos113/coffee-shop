<template lang="html">
  <el-menu default-active="2" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Sản Phẩm</span>
        </template>
        <el-menu-item index="/dashboard/products">Quản Lý Sản Phẩm</el-menu-item>
        <el-menu-item index="/dashboard/category">Danh Mục Sản Phẩm</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Order</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
import { Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item-group': MenuItemGroup,
    'el-menu-item': MenuItem
  }
}
</script>

<style lang="css">
</style>
