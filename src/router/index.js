import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditPerson from '@/components/EditPerson'
import ShowPerson from '@/components/ShowPerson'
import TextPerson from '@/components/TextPerson'

//模块化机制编程
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components/EditPerson',
      name: 'EditPerson',
      component: EditPerson
    },
    {
      path: '/components/ShowPerson',
      name: 'ShowPerson',
      component: ShowPerson
    },
    {
      path: '/components/TextPerson',
      name: 'TextPerson',
      component: TextPerson
    }
  ]
})

// const routes= [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
//   {
//     path: '/components/EditPerson',
//     name: 'EditPerson',
//     component: EditPerson
//   },
//   {
//     path: '/components/ShowPerson',
//     name: 'ShowPerson',
//     component: ShowPerson
//   },
//   {
//     path: '/components/TextPerson',
//     name: 'TextPerson',
//     component: TextPerson
//   }
// ]

// const router = new Router({
//   routes // (缩写) 相当于 routes: routes
// })

// const app = new Vue({
//   router
// }).$mount('#app')

// export default router

// router.beforeEach((to,form,next) => {
//   debugger
// })
