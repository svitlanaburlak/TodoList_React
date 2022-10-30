import PropTypes from 'prop-types';

import './form.scss';

function Form () {
  return (
    <form className="form">
      <input type="text" className="form-item" placeholder="Ajouter une tâche" />
    </form>
  );
}

export default Form;
