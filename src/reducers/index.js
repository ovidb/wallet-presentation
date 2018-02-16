import { combineReducers } from 'redux';
import walletReducer from './wallet';
import bitcoinReducer from './bitcoin';

export default combineReducers({
  wallet: walletReducer,
  bitcoin: bitcoinReducer,
})