import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // initialize component
    // constructor(props) {
    //     super(props);

    //     // create state object
    //     this.state = {
    //         lat: null,       // default for a number variable in null
    //         errorMessage: ''
    //     };
    // }

    // alternative way to initialize state
    state = {lat: null, errorMessage: ''};

    // Life cycle methods
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    //
    // componentDidUpdate() {
    //     console.log('My component was just updated - it rerendered!');
    // }

    // requirement from React for each component
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request." />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()};
            </div>
        );
    }
}


ReactDOM.render(
    <App />, document.querySelector('#root')
);