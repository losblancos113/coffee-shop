<template lang="html">
  <div class="product-detail">
    <el-form :model="formProduct" :rules="rules" ref="formProduct" label-width="100px">
      <el-form-item label="Tên" prop="name">
        <el-input v-model="formProduct.name" placeholder="Nhập tên danh mục"></el-input>
      </el-form-item>
      <el-form-item label="Danh Mục">
        <el-select v-model="formProduct.id_cate" placeholder="Chọn danh mục sản phẩm">
          <el-option label="Zone one" value="1"></el-option>
          <el-option label="Zone two" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Đơn giá" prop="price">
        <el-input-number v-model="formProduct.price" :step="1000" placeholder="Nhập đơn giá"></el-input-number>
      </el-form-item>
      <el-form-item label="Ảnh đại diện" prop="image_path">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('formProduct')">OK</el-button>
        <el-button @click="reset('formProduct')">Tạo lại</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Form, Button, Input, FormItem, Message, Select, Option, InputNumber, Upload } from 'element-ui'
export default {
  name: 'product-detail',
  data () {
    return {
      formProduct: {
        name: '',
        id_cate: '',
        price: 0,
        image_path: '',
        description: ''
      },
      imageUrl: '',
      rules: {
        name: [
          {
            required: true,
            message: 'Không được bỏ trống',
            trigger: 'blur'
          },
          { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
        ],
        price: [
          {
            required: true,
            message: 'Không được bỏ trống',
            trigger: 'blur'
          },
          {
            type: 'number', message: 'Chỉ được nhập số', trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    'el-form': Form,
    'el-button': Button,
    'el-input': Input,
    'el-form-item': FormItem,
    'el-select': Select,
    'el-option': Option,
    'el-input-number': InputNumber,
    'el-upload': Upload
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        Message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        Message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="css">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
