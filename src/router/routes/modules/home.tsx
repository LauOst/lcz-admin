import { AppRouteObject } from '#/router'
import { lazy, Suspense } from 'react'

import { CircleLoading } from '@/components/Loading'
const Home = lazy(() => import('@/views/home'))

const homeRouter: AppRouteObject = {
  order: 1,
  path: 'home',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Home />
    </Suspense>
  ),
  meta: {
    label: '首页',
    key: '/home',
  },
}
export default homeRouter
