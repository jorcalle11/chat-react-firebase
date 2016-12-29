import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import App from './components/app/app'
import 'materialize-css/dist/css/materialize.css'

const config = {
  apiKey: 'AIzaSyCzlPqBDvfM-mo3YTV10qZmZBHVBBpwnCk',
  authDomain: 'chat-react-af8c9.firebaseapp.com',
  databaseURL: 'https://chat-react-af8c9.firebaseio.com',
  storageBucket: 'chat-react-af8c9.appspot.com',
  messagingSenderId: '942572164848'
}

firebase.initializeApp(config)


render(<App/>,document.getElementById('root'))