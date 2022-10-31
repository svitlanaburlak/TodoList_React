import PropTypes from 'prop-types';

import './form.scss';

function Form ( { inputTaskLabel, handleInputChange, handleFormSubmit } ) {
  return (
    <form 
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit();
      }}
    >
      <input 
        type="text" 
        className="form-item" 
        placeholder="Ajouter une tâche"
        value={inputTaskLabel}
        onChange={(event) => {
          // just onChange without callback make the input appear as letter typed on next line
          handleInputChange(event.currentTarget.value);
        }}
        />
    </form>
  );
}

Form.propTypes = {
  inputTaskLabel: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
}

export default Form;
