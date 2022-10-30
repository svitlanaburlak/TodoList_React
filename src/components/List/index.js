import PropTypes from 'prop-types';

import Item from './item';
import './list.scss';

function List () {
  return (
    <ul>
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

export default List;
