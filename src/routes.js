import { Navigate } from 'react-router-dom'
import HomeScreen from './views/home/HomeScreen'
import Predictions from './views/matches/Predictions'
import MatchResults from './views/matches/MatchResults'

const routes = [
  { path: '/homepage', element: <HomeScreen /> },
  { path: '/matchResults', element: <MatchResults /> },
  { path: '/matchPredictions', element: <Predictions /> },
  { path: '/highlights', element: <div>Highlights</div> },
  { path: '/', element: <Navigate to="homepage" /> },
  { path: '*', element: <Navigate to="homepage" /> }
]

export default routes
