import PropTypes from 'prop-types';

function Item() {
  return (
    <li>
      <label className="list-item list-item--done">
        <input type="checkbox" checked />
        Item
      </label>
    </li>
  );
}

export default Item;
