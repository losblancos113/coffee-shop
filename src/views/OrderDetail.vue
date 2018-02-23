<template lang="html">
  <div class="order-detail">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="category in data" :key="category.id" :name="category.id">
        <template slot="title">
          <span class="collapse-title">{{ category.name }}</span>
        </template>
        <el-container>
          <el-row>
            <el-row>
              <el-col v-for="n in 6" :key="n" :md="6" :sm="6" :xs="24" class="image-main-section">
                <el-row class="img-part">
                  <el-col :md="24" :sm="24" :xs="24" class="img-section">
                    <img src="https://dummyimage.com/200x150/000/ebecf5.png&text=++++image+++">
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24" class="image-title">
                    <h3>Image Title</h3>
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24" class="image-description">
                    <p>Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et ...</p>
                  </el-col>
                  <el-col :md="24" :sm="24" :xs="24">
                    <el-button type="primary" @click.native.prevent="handleAddItem">Thêm vào</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-row>
        </el-container>
      </el-collapse-item>
    </el-collapse>
    <el-container>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24">
          <el-dialog
            title="Thêm sản phẩm"
            :visible.sync="showCartDetail"
            class="detail-order-dialog"
            center>
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
import {
  Collapse,
  CollapseItem,
  Form,
  Button,
  Input,
  FormItem,
  InputNumber,
  Message,
  Row, Col, Container,
  Dialog
} from 'element-ui'
import {
  getProductByCategory,
  getCategoryList
} from '@/api/api'
export default {
  name: 'order-detail',
  data () {
    return {
      activeNames: ['1'],
      data: [],
      showCartDetail: false,
      itemDetail: {
        quantity: 1,
        note: ''
      }
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
    'el-dialog': Dialog
  },
  methods: {
    resetDialog () {
      this.itemDetail = {
        quantity: 1,
        note: ''
      }
    },
    closeDialog () {
      this.resetDialog()
      this.showCartDetail = false
    },
    handleAddItem () {
      this.showCartDetail = true
    },
    addItemToCart () {
      this.resetDialog()
      this.showCartDetail = false
      // TODO add item to order
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
.order-detail {
  background-color: #fff;
  padding: 10px
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
@media only screen and (max-width: 768px) {
  .detail-order-dialog .el-dialog--center{
    width: 100%;
  }
}
/* .detail-order-dialog .el-dialog--center{
  width: 30%;
} */
</style>
