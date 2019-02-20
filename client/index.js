import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import registerServiceWorker from './src/registerServiceWorker';

const app = document.getElementById("app")

//render('Que voy a renderizar', 'Donde lo hare')
render(<App />, app);
registerServiceWorker();
