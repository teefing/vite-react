import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexPage from '@/pages/index'

const SeconPage = lazy(() => import('@/pages/second'))
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<IndexPage />} />
        <Route
          path="second"
          element={
            <Suspense fallback={null}>
              <SeconPage />
            </Suspense>
          }
        />
        {/* Other Routes here */}
      </Route>
    </Routes>
  )
}

export default MyRoutes
