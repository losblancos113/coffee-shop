<template lang="html">
  <div class="order-detail">
    <el-collapse class="collapse-wrapper" :accordion="true" v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="category in data" :key="category.id" :name="category.id">
        <template slot="title">
          <span class="collapse-title">{{ category.name }}</span>
        </template>
            <el-row>
              <el-col v-for="product in category.products" :key="product.id" :md="6" :sm="6" :xs="24" class="image-main-section">
                <el-row class="img-part">
                  <el-col :md="24" :sm="24" :xs="24" class="img-section">
                    <img src="https://dummyimage.com/200x150/000/ebecf5.png&text=++++image+++">
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24" class="image-title">
                    <h3>{{ product.name }}</h3>
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24" class="image-description">
                    <p>{{ product.price }}</p>
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24">
                    <el-button type="primary" v-on:click="handleAddItem(product.id,product.id_cate)">Thêm vào</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
      </el-collapse-item>
    </el-collapse>
    <el-table v-if="cart.length > 0" :data="cart">
      <el-table-column
        fixed
        prop="product.name"
        label="Tên"
        width="120">
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="Số lượng"
        width="120">
      </el-table-column>
      <el-table-column
        prop="note"
        label="Ghi chú"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operations"
        width="120">
        <template slot-scope="scope">
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          style="margin-left: 0px; margin-top: 5px"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-container>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24">
          <el-dialog
            title="Thêm sản phẩm"
            :visible.sync="showCartDetail"
            class="detail-order-dialog"
            center>
            <h3>{{ itemDetail.product.name }}</h3>
            <el-form :model="itemDetail">
              <el-form-item label="Số lượng">
                <el-input-number v-model="itemDetail.quantity"></el-input-number>
              </el-form-item>
              <el-form-item label="Ghi chú">
                <el-input type="textarea" v-model="itemDetail.note"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="closeDialog()">Cancel</el-button>
              <el-button type="primary" @click="addItemToCart()">Confirm</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
  </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  Collapse,
  CollapseItem,
  Form,
  Button,
  Input,
  FormItem,
  InputNumber,
  Message,
  MessageBox,
  Row, Col, Container,
  Dialog,
  Table,
  TableColumn
} from 'element-ui'
import {
  getProductByCategory,
  getCategoryList
} from '@/api/api'
export default {
  name: 'order-detail',
  computed: mapGetters(['cart']),
  data () {
    return {
      activeNames: '1',
      data: [],
      showCartDetail: false,
      itemDetail: {
        product: {},
        quantity: 1,
        note: ''
      },
      orderItems: []
    }
  },
  components: {
    'el-form': Form,
    'el-button': Button,
    'el-input': Input,
    'el-form-item': FormItem,
    'el-input-number': InputNumber,
    'el-collapse': Collapse,
    'el-collapse-item': CollapseItem,
    'el-container': Container,
    'el-row': Row,
    'el-col': Col,
    'el-dialog': Dialog,
    'el-table': Table,
    'el-table-column': TableColumn
  },
  methods: {
    ...mapActions(['removeItemFromCart', 'pushItemToCart']),
    resetDialog () {
      this.itemDetail = {
        product: {},
        quantity: 1,
        note: ''
      }
    },
    closeDialog () {
      this.resetDialog()
      this.showCartDetail = false
    },
    handleAddItem (productId, categoryId) {
      console.log(productId)
      let productSelected = this.data.find(x => x.id === categoryId).products.find(x => x.id === productId)
      this.itemDetail.product = productSelected
      this.showCartDetail = true
    },
    addItemToCart () {
      this.showCartDetail = false
      // TODO add item to order
      this.pushItemToCart(this.itemDetail)
      this.resetDialog()
    },
    handleDelete (index, row) {
      MessageBox.confirm('This will permanently delete the file. Continue?', 'Warning', {
        type: 'warning',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        customClass: 'default-messagebox'
      }).then(() => {
        this.removeItemFromCart(row)
        Message({
          message: 'Delete completed',
          type: 'success'
        })
      }).catch(() => {
        Message({
          message: 'Delete canceled',
          type: 'info'
        })
      })
    },
    handleEdit (index, row) {

    },
    handleChange (val) {
      console.log(val)
    },
    initData () {
      getCategoryList().then(res => {
        let status = res.status
        this.data = res.data
        if (status !== 200) {
          Message({
            message: res.data.error.message,
            type: 'error'
          })
        } else {
          //  handle data
          for (let i = 0; i < this.data.length; i++) {
            let cate = this.data[i]
            getProductByCategory(cate.id).then(res => {
              //  compose data
              this.data[i].products = res.data
            }).catch(error => {
              this.logining = false
              let {
                statusCode,
                message
              } = error.response.data.error
              if (statusCode !== 200) {
                Message({
                  message: message,
                  type: 'error'
                })
              }
            })
          }
        }
      }).catch(error => {
        this.logining = false
        let {
          statusCode,
          message
        } = error.response.data.error
        if (statusCode !== 200) {
          Message({
            message: message,
            type: 'error'
          })
        }
      })
    }
  },
  mounted () {
    console.log('init')
    this.initData()
  }
}
</script>

<style lang="css">
.el-main {
  padding: 0px
}
.order-detail {
  /* background-color: #fff; */
  padding: 10px
}
.collapse-wrapper {
  background-color: #fff;
  padding: 5px;
  margin-bottom: 10px
}
.collapse-title {
  font-weight: bold;
}
.image-main-section{
    margin-bottom:20px;
    padding-left: 15px;
    padding-right: 15px
}
.img-part{
    border-radius: 5px;
    margin:0px;
    border:1px solid #DDDDDD;
    background-color: #fff;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px
}
.img-section{
    padding: 5px;
}
.img-section img{
    width: 100%;
}
.image-title h3{
    margin:0px;
    color:#4C4C4C;
    padding: 15px 0px 8px 0px;
}
.image-description p{
    color:#848484;
}
.product-box {
  margin-left: 20px;
  margin-right: 20px
}
.default-messagebox {
  width: 100vw
}
@media only screen and (max-width: 768px) {
  .detail-order-dialog .el-dialog--center{
    width: 100%;
  }
}
/* .detail-order-dialog .el-dialog--center{
  width: 30%;
} */
</style>
