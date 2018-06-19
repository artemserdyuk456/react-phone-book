import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBXjGj4ViY2aWbFvz7CYfZYWT37dll2HUI",
    authDomain: "react-phone-book-app.firebaseapp.com",
    databaseURL: "https://react-phone-book-app.firebaseio.com",
    projectId: "react-phone-book-app",
    storageBucket: "react-phone-book-app.appspot.com",
    messagingSenderId: "787120456455"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();