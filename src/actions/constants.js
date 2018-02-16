import { generateActionTypes } from '../helpers/utilites';

const WALLET_ACTIONS = [
  'setBalance',
  'depositAmount',
  'withdrawAmount',
];

const BITCOIN_ACTIONS = [
  'fetchBitcoin'
];

export const WALLET_ACTION_TYPES = generateActionTypes('balance', WALLET_ACTIONS);
export const BITCOIN_ACTION_TYPES = generateActionTypes('bitcoin', BITCOIN_ACTIONS);