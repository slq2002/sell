import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import denglu from '@/components/denglu'
import liuyan from '@/components/liuyan'
import xinwen from '@/components/xinwen'
import guanyu from '@/components/guanyu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/liuyan',
      name: 'liuyan',
      component: liuyan
    },
    {
      path: '/xinwen',
      name: 'xinwen',
      component: xinwen
    },
    {
      path: '/guanyu',
      name: 'guanyu',
      component: guanyu
    }
  ]
})
