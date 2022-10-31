import PropTypes from 'prop-types';

import Item from './item';
import './list.scss';

function List ({ tasks, handleCheckChange }) {
  return (
    <ul>
      {
        tasks.map((task) => (
          <Item {...task} handleCheckChange={handleCheckChange} />
        ))
      }
    </ul>
  );
}

List.protoTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  handleCheckChange: PropTypes.func.isRequired,
}

export default List;
