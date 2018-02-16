import bitcoinReducer from './bitcoin';
import { BITCOIN_ACTION_TYPES as T } from '../actions/constants';
import { generateAction as a } from '../helpers/utilites';

describe('bitcoinReducer', () => {
  const bitcoinData = { coindesk: 'bitcoin price index' };

  it('should fetch and set the bitcoin data', () => {
    expect(bitcoinReducer(undefined, a(T.fetchBitcoin, bitcoinData)))
      .toEqual(bitcoinData)
  });
});