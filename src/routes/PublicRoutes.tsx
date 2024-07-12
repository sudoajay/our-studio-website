import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

// hoc
import withLazyComponent from '../hoc/withLazyComponent'
// components
import LayoutDefault from '../components/layout/LayoutDefault'

const LandingPage = withLazyComponent(lazy(() => import('../screens/LandingPage')))
const ProjectPage = withLazyComponent(lazy(() => import('../screens/ProjectPage')))
const NotFoundPage = withLazyComponent(lazy(() => import('../screens/NotFoundPage')))
const TeamPage = withLazyComponent(lazy(() => import('../screens/TeamPage')))
const DiscussProjectPage = withLazyComponent(lazy(() => import('../screens/DiscussProjectPage')))

const PublicRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <LayoutDefault>
            <LandingPage />
          </LayoutDefault>
        }
      />
      <Route
        path="/project"
        element={
          <LayoutDefault>
            <ProjectPage />
          </LayoutDefault>
        }
      />

      <Route
        path="/team"
        element={
          <LayoutDefault>
            <TeamPage />
          </LayoutDefault>
        }
      />
      <Route
        path="/discuss-project"
        element={
          <LayoutDefault>
            <DiscussProjectPage />
          </LayoutDefault>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)

export default PublicRoutes
