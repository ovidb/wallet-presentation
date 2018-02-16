import React, { Component } from 'react';
import { connect } from 'react-redux';
import { depositAmount, withdrawAmount } from '../actions/wallet';

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateAmount: 0,
    }
  }

  handleAmountChange = event =>
    this.setState({ updateAmount: parseInt(event.target.value, 10) });

  render() {
    const { balance, depositAmount, withdrawAmount } = this.props;
    const { updateAmount } = this.state;
    return (
      <div>
        <h1>Wallet balance: <span className='balance'>{balance}</span></h1>
        <input className='input-amount'
               value={updateAmount}
               onChange={this.handleAmountChange}
        />
        <button
          type='button'
          className='deposit-btn'
          onClick={() => depositAmount(updateAmount)}
        >Deposit</button>
        <button
          type='button'
          className='withdraw-btn'
          onClick={() => withdrawAmount(updateAmount)}
        >Withdraw</button>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { balance }}) => ({ balance });
export default connect(mapStateToProps, {
  depositAmount,
  withdrawAmount,
})(Wallet);
