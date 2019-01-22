// import the React and ReactDOM libraries
// ES2015 Import statement VS CommonJS
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function() {
    const buttonText = {text: 'Click Me'};
    const style = {backgroundColor: 'blue', color: 'white'}
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
             {/*jsx: use double quotes; html: single quotes. they can be all double quotes.*/}
            <button style={style}>
                {buttonText['text']}
            </button>
        </div> // return jsx
    )
}


// Take the react component and show it on the screen
ReactDOM.render(
    <App/>, document.querySelector('#root')
);