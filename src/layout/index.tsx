import { Suspense } from 'react'
import { CircleLoading } from '@/components/Loading'
import Main from './components/Main.tsx'

const DashboardLayout = () => {
  const verticalLayout = (
    <>
      <Main />
    </>
  )

  return (
    <div>
      <Suspense fallback={<CircleLoading />}> {verticalLayout} </Suspense>
    </div>
  )
}

export default DashboardLayout
