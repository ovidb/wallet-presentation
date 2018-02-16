import walletReducer from './wallet';
import walletReducer2 from './wallet';

import * as WalletActions from '../actions/wallet';

describe('Balance Reducer', () => {
  const amount = 10;
  const state = { balance: 10 };
  it('should set a balance', () => {
    expect(walletReducer(undefined, WalletActions.setBalance(amount))).toEqual({ balance: amount });
  });

  it('should read the balance from the cookie on re-initialization', () => {
    expect(walletReducer2(undefined, {})).toEqual({ balance: amount });
  });

  it('should add the amount to the current balance', () => {
    expect(walletReducer(state, WalletActions.depositAmount(10))).toEqual({ balance: state.balance + amount })
  });

  it('should add the amount to the current balance', () => {
    expect(walletReducer(state, WalletActions.withdrawAmount(10))).toEqual({ balance: state.balance - amount })
  });

});