import React, { Component } from 'react';
import { BsCheck } from 'react-icons/bs';
import './CheckoutSteps.style';

const steps = ['SHIPPING_STEP', 'BILLING_STEP', 'DETAILS_STEP'];
const renderedSteps = [
  {
    text: 'Shipping',
    num: 1,
  },
  {
    text: 'Review and payments',
    num: 2,
  },
];

export default class CheckoutSteps extends Component {
  render() {
    const { step } = this.props;
    const idx = steps.indexOf(step);
    const width = `${Math.floor(
      (idx + 1) * (100 / (renderedSteps.length + 1))
    )}%`;
    return (
      <div className="CheckoutSteps">
        <div className="CheckoutSteps-outer">
          <div className="inner" style={{ width }}></div>
          <div className="steps">
            {renderedSteps.map(step => (
              <div
                className={`step ${idx + 1 >= step.num && 'active'}`}
                text={step.text}
                key={step.num}
              >
                {idx >= step.num ? <BsCheck /> : step.num}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
