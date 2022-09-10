import { Navigate } from 'react-router-dom'
import HomeScreen from './views/home/HomeScreen'
import Gameday from './views/matches/Gameday'
import Predictions from './views/matches/Predictions'

const routes = [
  { path: '/homepage', element: <HomeScreen /> },
  { path: '/matchResults', element: <Gameday /> },
  { path: '/matchPredictions', element: <Predictions /> },
  { path: '/highlights', element: <div>Highlights</div> },
  { path: '/', element: <Navigate to="homepage" /> },
  { path: '*', element: <Navigate to="homepage" /> }
]

export default routes
