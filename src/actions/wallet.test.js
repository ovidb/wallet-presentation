import { WALLET_ACTION_TYPES } from './constants';
import * as WalletActions from './wallet';
import { generateAction as action, functionalActionExtractor } from '../helpers/utilites';


it('should create an aaction to set the balance', () => {
  const balance = 0;
  const expectedAction = action(WALLET_ACTION_TYPES.setBalance, { balance });

  expect(WalletActions.setBalance(balance)).toEqual(expectedAction);
});

it('should create an action to deposit an amount', () => {
  const amount = 10;
  const state = { balance: 10}

  const expectedAction = functionalActionExtractor(
    action(
      WALLET_ACTION_TYPES.depositAmount,
      state => {}));

  expect(functionalActionExtractor(WalletActions.depositAmount(10))).toEqual(expectedAction)

});

it('should create an action to withdraw an amount', () => {
  const amount = 10;
  const state = { balance: 10}

  const expectedAction = functionalActionExtractor(
    action(
      WALLET_ACTION_TYPES.withdrawAmount,
      state => {}));

  expect(functionalActionExtractor(WalletActions.withdrawAmount(10))).toEqual(expectedAction)

});

