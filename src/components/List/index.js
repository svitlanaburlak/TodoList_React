import PropTypes from 'prop-types';

import Item from './item';
import './list.scss';

function List ( {tasks} ) {
  return (
    <ul>
      {
        tasks.map((task) => (
          <Item {...task} key={task.id} />
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
}

export default List;
