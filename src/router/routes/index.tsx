import { Navigate } from 'react-router-dom'

import { moduleRoutes } from './module'

export const routes = [
  moduleRoutes,
  // No match 404
  { path: '*', element: <Navigate to='/404' replace /> },
]
