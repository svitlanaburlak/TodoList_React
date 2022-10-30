// == Import
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import './styles.scss';

// == Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div className="app">
        <h1>List</h1>
        <Form />
        <Counter />
        <List />
      </div>
    );
  } 
}

// == Export
export default App;
