import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DevTools from './DevTools.js';
import reducer from './import/reducer.js';
import { addComment } from './import/actions.js'

const store = createStore(
    reducer,
    DevTools.instrument()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));