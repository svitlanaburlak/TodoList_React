import PropTypes from 'prop-types';
import React from 'react';

import './counter.scss';

class Counter extends React.Component {
  render () {
    const { counter } = this.props;
    
    return (
    <p className="counter"
    >{counter} tâches en cours</p>)
  }
    
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Counter;
