import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import charts from './ducks/charts';

export default combineReducers({
  router: routerReducer,
  charts
})
