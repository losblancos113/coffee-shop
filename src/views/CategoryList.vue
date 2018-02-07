<template lang="html">
  <div class="category-list">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Tên"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small">Detail</el-button>
          <el-button type="text" v-on:click="editCategory(scope.row)" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Table, TableColumn, Button } from 'element-ui'
import { getCategoryList } from '@/api/api'

export default {
  name: 'category-list',
  data () {
    return {
      tableData: []
    }
  },
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button
  },
  methods: {
    handleClick () {
      console.log('hello')
    },
    editCategory (category) {
      console.log(category)
      this.$router.push({name: 'editCategory', params: { category, mode_p: { insert: false, edit: true } }})
    }
  },
  mounted () {
    getCategoryList().then(res => {
      this.tableData = res.data
    }).catch(error => {
      console.error(error)
    })
  }
}
</script>

<style lang="css">
</style>
