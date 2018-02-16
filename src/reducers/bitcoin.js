import { BITCOIN_ACTION_TYPES } from '../actions/constants';
import _ from 'lodash';

const INITIAL_STATE = { coindesk: '' };

export default function(state = INITIAL_STATE, action) {
  if(_.includes(BITCOIN_ACTION_TYPES, action.type)) {
    return ({
      ...state,
      ...action.payload })
  }

  return state;
};