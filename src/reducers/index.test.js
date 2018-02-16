import rootReducer from './index.js'

describe('rootReducer', () => {
  it('initializes the default state', () => {
    const defaultState = {
      wallet: { balance : 0 },
      bitcoin: { coindesk: '' },
    };

    expect(rootReducer({}, {})).toEqual(defaultState)
  })
});
