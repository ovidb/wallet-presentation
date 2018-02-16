// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as BitcoinActions from './bitcoin';

const createMockStore = configureMockStore([ thunk ]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' } };

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
);

it('should create an async action to fetch the bitcoin value', () => {
  const expectActions = [{ type: 'BITCOIN/FETCH_BITCOIN', payload: { coindesk: mockResponse.body }}];

  // we need to return the promise otherwise jest can't execute the test
  return store.dispatch(BitcoinActions.fetchBitcoin()).then(() => {
    // store.getActions() will return all the actions in the store
    expect(store.getActions()).toEqual(expectActions)
  })
}); 