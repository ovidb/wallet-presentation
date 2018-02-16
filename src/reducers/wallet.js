import { WALLET_ACTION_TYPES } from '../actions/constants';
import _ from 'lodash';
import { read_cookie, bake_cookie } from 'sfcookies';

const INITIAL_STATE = { balance: 0 };
const BALANCE_COOKIE = 'BALANCE_COOKIE';

export default function(state = INITIAL_STATE, action) {
  let newState = {};
  if(_.includes(WALLET_ACTION_TYPES, action.type)) {
    newState = {
      ...state,
      ...(typeof action.payload === 'function'
        ? action.payload(state)
        : action.payload )}
    bake_cookie(BALANCE_COOKIE, newState.balance);
    return newState;
  }
  const balance = parseInt(read_cookie(BALANCE_COOKIE), 10);

  return balance ? { balance: balance } : state;
};