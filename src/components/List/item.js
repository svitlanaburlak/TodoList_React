import PropTypes from 'prop-types';

function Item( {id, label, done} ) {

  let cssClass = 'list-item';

  if (done) {
    cssClass += ' list-item--done';
  }
  
  const taskId = `task-${id}`;

  return (
    // better not to put just number as a key to avoid doubles
    <li key={taskId}>
      <label className={cssClass} htmlFor={taskId}>
        <input id={taskId} type="checkbox" checked={done} />
        {label}
      </label>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

export default Item;
