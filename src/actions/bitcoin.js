import { generateAction as a } from '../helpers/utilites';
import { BITCOIN_ACTION_TYPES as T } from './constants';

export const fetchBitcoin = () => dispatch =>
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(r => r.json())
    .then(json => dispatch(a(T.fetchBitcoin, { coindesk: json })));