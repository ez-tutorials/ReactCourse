import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // relative path

const App = () => {
    return (
        <div className="ui container comments">
            {/* Components are treated as JS tag */}
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))