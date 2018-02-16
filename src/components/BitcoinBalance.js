import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';
import _ from 'lodash';

export class BitcoinBalance extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  getBTCAmount = (rate, balance) => (balance / parseInt(rate.split(',').join(''), 10)).toFixed(6);

  render() {
    const rate = _.get(this.props, 'bpi.USD.rate');
    const balance = this.props.balance;
    return (
      <div>
          <h3>Bitcoin Balance <span className='btc-amount'>{(rate && balance) && this.getBTCAmount(rate, balance)}</span></h3>
      </div>
    );
  }
}

BitcoinBalance.defaultProps = {
  bpi: { USD: { rate: '1,000' } },
  balance: 0
};

const mapStateToProps = (
  {
    bitcoin: { coindesk: { bpi } },
    wallet: { balance },
  },
) => ({ bpi, balance });

export default connect(mapStateToProps, {
  fetchBitcoin,
})(BitcoinBalance);
