import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
import { Store } from './redux/store'

const App: FunctionComponent = () => {
  const content = useRoutes(routes)
  return (
    <Provider store={Store}>
        {content}
    </Provider>
  )
}

export default App
