import PropTypes from 'prop-types';

function Item( {label, done} ) {
  return (
    <li>
      <label className="list-item list-item--done">
        <input type="checkbox" checked />
        {label}
      </label>
    </li>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

export default Item;
