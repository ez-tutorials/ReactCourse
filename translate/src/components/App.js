import  React from 'react';
import UserCreate from './UserCreate';
import { LanguageContext } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';
import LanguageStore from '../contexts/LanguageContext'

class App extends React.Component{

  state = { language: 'english'};

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="primary">
            <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
      </div>
    );
  }
}

export default App;
