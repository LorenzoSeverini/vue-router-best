import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // link active class
  linkActiveClass: 'active-link',
  // scrool behavior 
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  },
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home',
    },

    {
      path: '/protected',
      name: 'protected',
      components: {
        default: () => import('@/pages/Protected.vue'),
        LeftSidebar: () => import('@/components/LeftSidebar.vue'),
      },
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
    },

    {
      path: '/invoices',
      name: 'invoices',
      components: {
        default: () => import('@/pages/Invoices.vue'),
        LeftSidebar: () => import('@/components/LeftSidebar.vue'),
      },
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: "/example/:id(\\d+)?",
      component: () => import('@/pages/Login.vue'),

    },

    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/pages/DestinationShow.vue'),
      props: route => ({...route.params, id: parseInt(route.params.id)}),
      
      beforeEnter: (to, from) => {
        
        const exists = sourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )

        if (!exists) {
          return { 
            name: 'NotFound',
            params: { pathMatch: to.path.split('/').slice(1) },
            query: to.query,
            hash: to.hash,
          }
        }


      },

      // small children routes
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/pages/ExperienceShow.vue'),
          props: route => ({...route.params, id: parseInt(route.params.id)})
        }
      ]
    },

    {
      path: '/:pathMatch(.*)*', // 404 page
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ]
})

// global navigation guard
router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath }}
  }
})

export default router
