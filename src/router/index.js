import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home.vue'
import Course from '@/view/home/course.vue'
import Club from '@/view/home/club.vue'
import About from '@/view/About.vue'
import Login from '@/view/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home',
      component: Home,
      children: [
        { path: '/', redirect: '/home/course' },
        {
          path: 'course',
          component: Course,
          name: 'course-center'
        },
        {
          path: 'club',
          component: Club,
          name: 'club'
        },
        { path: '/about', component: About }
      ] },
    { path: '/login', component: Login },
    { path: '/', redirect: '/home' }
  ]
})
