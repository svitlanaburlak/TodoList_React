import PropTypes from 'prop-types';

import './form.scss';

function Form ( {task, addTask} ) {
  return (
    <form className="form">
      <input 
        type="text" 
        className="form-item" 
        placeholder="Ajouter une tâche"
        value={task} 
        onChange={(event) => { addTask(event.target.value);}
        }/>
    </form>
  );
}

Form.propTypes = {
  task: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
}

export default Form;
