import PropTypes from 'prop-types';

function Item( {id, label, done, handleCheckChange } ) {

  let cssClass = 'list-item';

  if (done) {
    cssClass += ' list-item--done';
  }
  
  const taskId = `task-${id}`;

  return (
    // better not to put just number as a key to avoid doubles
    <li key={taskId}>
      <label className={cssClass} htmlFor={taskId}>
        <input 
          id={taskId} 
          type="checkbox" 
          checked={done}
          onChange={() => {
            handleCheckChange(id);
          }}
        />
        {label}
      </label>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
}

export default Item;
