import { App as AntdApp } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import AntdConfig from '@/styles/antd'

const App = () => {
  return (
    <AntdConfig>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </AntdConfig>
  )
}

export default App
