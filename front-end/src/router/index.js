import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import ChoreChart from '@/views/ChoreChart.vue'
import SelectView from '@/views/SelectView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
      path: '/create',
      name: 'create',
      component: CreateView
  },
  {
      path:'/chart/:id',
      name: 'chart',
      component: ChoreChart
  },
  {
      path: '/select',
      name: 'select',
      component: SelectView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
