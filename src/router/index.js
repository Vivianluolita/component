import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditPerson from '@/components/EditPerson'
import ShowPerson from '@/components/ShowPerson'
import TextPerson from '@/components/TextPerson'
import TesElemen from '@/components/TesElemen'
import TestTable from '@/components/TestTable'
import TestTable2 from '@/components/TestTable2'
import TestTable3 from '@/components/TestTable3'
import TestTable6 from '@/components/TestTable6'
// import TestTable7 from '@/components/TestTable7'
import TestTable9 from '@/components/TestTable9'
import TestTable10 from '@/components/TestTable10'
import TestTable4 from '@/components/my-dialog-animal/MyDialogAnimal'

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
    },
    {
      path: '/components/TesElemen',
      name: 'TesElemen',
      component: TesElemen
    },
    {
      path: '/components/TestTable',
      name: 'TestTable',
      component: TestTable
    },
    {
      path: '/components/TestTable2',
      name: 'TestTable2',
      component: TestTable2
    },
    {
      path: '/components/TestTable3',
      name: 'TestTable3',
      component: TestTable3
    },
    {
      path: '/components/TestTable4',
      name: 'TestTable4',
      component: TestTable4
    },
    {
      path: '/components/TestTable6',
      name: 'TestTable6',
      component: TestTable6
    },
    {
      path: '/components/TestTable10',
      name: 'TestTable10',
      component: TestTable10
    },
    // {
    //   path: '/components/TestTable7',
    //   name: 'TestTable7',
    //   component: TestTable7
    // },
    {
      path: '/components/TestTable9',
      name: 'TestTable9',
      component: TestTable9
    },
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
