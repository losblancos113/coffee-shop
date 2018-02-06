<template lang="html">
  <div class="product-list">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="Tên"
        width="120">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Giá"
        width="120">
      </el-table-column>
      <el-table-column
        prop="image_path"
        label="Ảnh">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <action-button></action-button>
  </div>
</template>

<script>
import { getProductList } from '@/api/api'
import { Table, TableColumn, Button } from 'element-ui'
import ActionButton from '@/components/ActionButton.vue'

export default {
  data () {
    return {
      tableData: []
    }
  },
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'action-button': ActionButton
  },
  methods: {
    handleClick () {
      console.log('hello')
    }
  },
  mounted: function () {
    this.tableData = getProductList().then(res => {
      console.log(res)
      this.tableData = res.data
    }).catch(error => {
      console.error(error)
    })
  }
}
</script>

<style lang="css">
</style>
