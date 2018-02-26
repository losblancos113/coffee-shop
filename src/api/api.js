import axios from 'axios'

let base = 'http://192.168.31.235:3000/api'

export const requestLogin = params => { return axios.post(`${base}/Users/login`, params).then(res => res) }

export const getProductList = () => { return axios.get(`${base}/product`).then(res => res) }

export const getProductByCategory = (idCate) => { return axios.get(`${base}/category/${idCate}/products`).then(res => res) }

export const addCategory = (category) => { return axios.post(`${base}/category`, category).then(res => res) }

export const updateCategory = (category) => { return axios.put(`${base}/category`, category).then(res => res) }

export const getCategoryList = () => { return axios.get(`${base}/category`).then(res => res) }

export const getCategoryById = (id) => { return axios.get(`${base}/category/${id}`).then(res => res) }
