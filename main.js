import Vue from 'vue'
import App from './App'
// 导入 store 的实例对象
import store from '@/store/store.js'

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
$http.baseUrl = 'https://api-hmugo-web.itheima.net'

// 请求拦截器
$http.beforeRequest = function (options) {
 uni.showLoading({
     title: '数据加载中...',
   })
}

// 响应拦截器
$http.afterRequest = function () {
  uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
uni.showToast({
title,
duration,
icon: 'none',
})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
  // 将 store 挂载到 Vue 实例上
    store,
})
app.$mount()
