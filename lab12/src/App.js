import React from "react";
import { messaging } from "./init-fcm";
import { compose, lifecycle, withState } from "recompose";

const serverkey = "AAAAxZM4Pg0:APA91bHtRpskKDSL7omhTlwpFovPIurCZpRuPyI-0rGH2g6fdw8fezJgqez5GD8YAGAxUQgmdbSN2ZlBb_dlTvfiGmGnnXJukYv3fqUCw8psXwxFf8-rBSdY68IpzBhMOwGIJ_zL209T";
function bodyParameter(token) {
  const collection = {
    "notification": {
      "title": "Firebase 1",
      "body": "Firebase is awesome",
      "click_action": "http://localhost:3000/",
      "icon": "http://url-to-an-icon/icon.png"
    },
    "to": token
  };
  return collection;
};

const App = ({ token }) => (
  <>
    <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
    <div>
      API/Server key: <p>{serverkey}</p>
    </div>
    <div>
      Current token is: <p>{token}</p>
    </div>
    <div>
      Postman Details : 
      <ul>
        <li><b>Endpoint:</b> https://fcm.googleapis.com/fcm/send</li>
        <li><b>Method:</b> POST</li>
        <li><b>Header:</b> <br /> 1. Authorization : <b>key={serverkey}</b> <br />
        2.Content-Type : <b>application/json</b></li>
        <li><b>Body Parameter:</b><br /><b></b><div><pre>{JSON.stringify(bodyParameter(token), null, 2) }</pre></div></li>
      </ul>
    </div>
  </>
);

export default compose(
  withState("token", "setToken", ""),
  lifecycle({
    async componentDidMount() {
      const { setToken } = this.props;
      messaging
        .requestPermission()
        .then(async function() {
          const token = await messaging.getToken();
          setToken(token);
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
    }
  })
)(App);