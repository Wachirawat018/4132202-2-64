import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyD2ywdg3PptMba8D6Qv7XB8XRCAoJx7lKs",
  authDomain: "react-sec01-018.firebaseapp.com",
  projectId: "react-sec01-018",
  storageBucket: "react-sec01-018.appspot.com",
  messagingSenderId: "848578493965",
  appId: "1:848578493965:web:3c8c250b501d7e9eb85f44"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BLYST2A_7HOSXbFaDt630uk5kSORfF0ucnm2RMEWU5N_tKjqKf5I6yNrXZyH3k8rKqbKEasBzW8tTJc2NL8S2L4"
);

export { messaging };
