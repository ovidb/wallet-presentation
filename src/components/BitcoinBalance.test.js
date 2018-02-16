import React from 'react';
import { shallow, mount } from 'enzyme';
import { BitcoinBalance } from './BitcoinBalance';

describe('BitcoinBalance', () => {
  const mockFetchbitcoin = jest.fn();
  let props = {
    balance: 20,
    bpi: 9000,
  };
  let loot = shallow(<BitcoinBalance {...props}/>);

  it('BitcoinBalance renders correctly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin;
      loot = mount(<BitcoinBalance {...props} />);
    });

    it('should dispatch the `fetchBitcoin()`', () => {
      expect(mockFetchbitcoin).toHaveBeenCalled();
    });

  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bpi: { USD: { rate: '1,000' } } };
      loot = shallow(<BitcoinBalance {...props}/>);
    });

    it('should display the correct bitcoin value', () => {
      expect(loot.find('.btc-amount').text()).toEqual((10/1000).toFixed(6).toString())
    });
  });

});
