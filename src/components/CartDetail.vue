<template lang="html">
  <div class="cart-detail">
    <el-dialog
      title="Warning"
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <span>It should be noted that the content will not be aligned in center by default</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="visible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog, Button } from 'element-ui'
export default {
  name: 'cart-detail',
  components: {
    'el-dialog': Dialog,
    'el-button': Button
  },
  computed: {
    dialogVisible () {
      if (typeof this.visible !== 'undefined' && this.visible) {
        return this.visible
      } else {
        return false
      }
    }
  },
  props: ['visible']
}
</script>

<style lang="css">
</style>
