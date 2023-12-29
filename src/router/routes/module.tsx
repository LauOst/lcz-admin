import { AppRouteObject } from '#/router.ts'
import { Navigate } from 'react-router-dom'
import DashboardLayout from '@/layout'
import { getMenuModules } from '@/router/utils'

const moduleList = getMenuModules()
export const moduleRoutes: AppRouteObject = {
  path: '/',
  element: <DashboardLayout />,
  children: [{ index: true, element: <Navigate to='home' replace /> }, ...moduleList],
}
