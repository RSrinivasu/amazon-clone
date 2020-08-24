import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './StateProvider';
import reducer,{ intialState } from './reducer';

ReactDOM.render(
    (<React.StrictMode>
        <StateProvider initialState={intialState}  reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>)
    , document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
    
registerServiceWorker();
