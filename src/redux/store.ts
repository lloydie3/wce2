import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/rootReducer'

const initialState = {}
const middlewares = [thunk]
const devtools = (x) => x

export const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
)

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
