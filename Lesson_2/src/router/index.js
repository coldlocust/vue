import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainContents from '@/components/MainContents'
import TestCode from '@/components/TestCode'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContents',
      component: MainContents
    }
  ]
})
