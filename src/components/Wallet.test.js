import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = {
    balance: 20,
    depositAmount: mockDeposit,
    withdrawAmount: mockWithdraw,
  };

  const wallet = shallow(<Wallet {...props} />);

  it('should render propery', () => {
    expect(wallet).toMatchSnapshot(wallet);
  });

  it('should display the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual(props.balance.toString());
  });

  it('should display a deposit/withdraw input', () => {
    expect(wallet.find('.input-amount').exists()).toBe(true);
  });

  it('should have a deposit button', () => {
    expect(wallet.find('.deposit-btn').exists()).toBe(true);
  });
  it('should have a withdraw button', () => {
    expect(wallet.find('.withdraw-btn').exists()).toBe(true);
  })

  describe('when the user types into the wallet input', () => {
    const updateAmount = '25';

    beforeEach(() => {
      wallet.find('.input-amount')
        .simulate('change', { target: { value: updateAmount } });
    });

    it('should update the local wallet balance in the state and converts it to a number', () => {
      expect(wallet.state().updateAmount).toEqual(parseInt(updateAmount, 10));
    });

    describe('when the user wants to deposit', () => {
      beforeEach(() => {
        wallet.find('.deposit-btn').simulate('click')
      })

      it('should dispatch `depositAmount`', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(updateAmount, 10));
      });

    });

    describe('when teh user wants to withdraw', () => {
      beforeEach(() => {
        wallet.find('.withdraw-btn').simulate('click');
      });

      it('should dispatch `withdrawAmount`', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(updateAmount, 10));
      });
    });
  });

});