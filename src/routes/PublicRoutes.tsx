import { Route, Routes, HashRouter } from 'react-router-dom'

// components
import LayoutDefault from '../components/layout/LayoutDefault'

// get screens
import LandingPage from '../screens/LandingPage'
import ProjectPage from '../screens/ProjectPage'
import NotFoundPage from '../screens/NotFoundPage'
import TeamPage from '../screens/TeamPage'
import DiscussProjectPage from '../screens/DiscussProjectPage'

const PublicRoutes = (): JSX.Element => (
  <HashRouter>
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
  </HashRouter>
)

export default PublicRoutes
