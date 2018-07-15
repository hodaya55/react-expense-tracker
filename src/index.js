import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
