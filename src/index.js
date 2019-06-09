import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './import/reducer.js';
// import addComment from './import/actions.js';
// import { default as editComment, addComment } from './import/actions.js';
import {
    addComment,
    editComment,
    removeComment,
    thumbUp,
    thumbDown
} from './import/actions.js'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(<App />, document.getElementById('root'));