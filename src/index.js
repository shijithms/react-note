import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDXyz6AABUaysN-DR6kniJnrc3jNHjHgPI",
    authDomain: "react-notes-app-dc1f9.firebaseapp.com",
    databaseURL: "https://react-notes-app-dc1f9.firebaseio.com",
    projectId: "react-notes-app-dc1f9",
    storageBucket: "react-notes-app-dc1f9.appspot.com",
    messagingSenderId: "948278783535",
    appId: "1:948278783535:web:37bc5362846731078c20da",
    measurementId: "G-X3E7D4LE1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
