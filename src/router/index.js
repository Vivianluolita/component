import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditPerson from '@/components/EditPerson'
import ShowPerson from '@/components/ShowPerson'

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
    }
  ]
})
