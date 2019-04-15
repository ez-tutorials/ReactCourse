import React from 'react';
import LanguageContext from '../contexts/LangeuageContext'

// export default React.createContext('english');

const Context = React.createContext('english');

class LanguageStore extends React.Component {
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language });
  }
  render() {
    return (
      <Context.Provider value={{ ...this.state, onLangeuageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
