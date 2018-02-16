import { generateAction as a } from '../helpers/utilites';
import { WALLET_ACTION_TYPES as T } from './constants';

export const setBalance = balance =>
  a(T.setBalance, { balance });

export const depositAmount = amount =>
  a(T.depositAmount,
    state => ({ balance: state.balance + amount }));

export const withdrawAmount = amount =>
  a(T.withdrawAmount,
    state => ({ balance: state.balance - amount }));