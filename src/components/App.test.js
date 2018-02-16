import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render propery', () => {
    expect(app).toMatchSnapshot(app);
  });

  it('should contain a wallet component', () => {
    // nice trick
    // console.log(app.debug())
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('should contain a BitcoinBalance component', () => {
    expect(app.find('Connect(BitcoinBalance)').exists()).toBe(true);

  });
});