import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Display from './Display';
import Game from './Game';
import * as serviceWorker from './serviceWorker';

/*
const cityArray = [{id: 1, name: "Melbourne", country: "Australia"},
                   {id: 2, name: "Paris", country: "France"},
                   {id: 3, name: "Los Angeles", country: "United States"}
                  ];

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Display cities={cityArray}/>,
    document.getElementById("root")
);
*/

ReactDOM.render(
    <Game />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
