import { lazy, Suspense } from 'react'
import AboutPage from './AboutPage'
import DinamicPage from './DinamicPage'
import HomePage from './HomePage'
import Page404 from './Page404'
import { Route } from './Route'
import { Router } from './Router'

const LazyAboutPage = lazy(() => import('./AboutPage'))

const routes = [
  {
    path: '/search/:query',
    Component: DinamicPage
  },
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  }
]

function App() {
  return (
    <Suspense fallback={null}>
      <Router
        routerRoutes={routes}
        defaultComponent={Page404}
      >
        <Route
          path='/'
          Component={HomePage}
        />
        <Route
          path='/about'
          Component={LazyAboutPage}
        />
      </Router>
    </Suspense>
  )
}

export default App
