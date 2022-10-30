import PropTypes from 'prop-types';

import './counter.scss';

function Counter ( {counter} ) {
  return (
    <p className="counter" 
      value={counter}
    > tâches en cours</p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default Counter;
