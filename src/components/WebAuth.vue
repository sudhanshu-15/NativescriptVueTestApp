<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Login">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <WebView ref="loginWeb" :src="src" @loadFinished="getSessionKey"></WebView>
  </Page>
</template>

<script>
import {BASE_PATH, LOGIN_PATH} from '../common/constants'
import * as WebViewMod from 'ui/web-view'
import firebase from 'nativescript-plugin-firebase'
export default {
  methods: {
      getDeviceToken(args) {
        var enurl = "";
        var tempBool = false;
        console.log("url: " + args.url)
        var tempurl = args.url;                     //Get the URL which is returned after CAS login
        try{
            var n = tempurl.indexOf("LoginMobile.cfm");             //Search for auth keyword in the returned URL
            var m = tempurl.indexOf("auth=");
            console.log("n " + n + " m " + m);
        }catch (err) {
            console.log("Not able to find LoginMobile.cfm or auth=");
        }
        if (n != -1 && m != -1){                                           //Check if "auth" is found
            enurl = tempurl.substr(n+21, tempurl.length - 1);    //Extract the encoded URL
            tempBool = true;                                       //Set check Boolean to true to continue further processing
            console.log("enurl: " + enurl);                  //----> For debuggig --- REMOVE                                     //Show loading indicator while the futher processing is done.
        }

        if (tempBool){
            var uri_decoded = decodeURIComponent(enurl);        //Decode the encode URL
            console.log("Decoded URL --- " + uri_decoded);    //---> For intermediate debugging of values | REMOVE LATER
        }
        if (uri_decoded.length != 0) {
            this.axios.get(uri_decoded)
            .then((response) => {
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })
        }
      },

      getDeviceTokenPromise(args) {
        //   console.log("getDeviceToken called")
          return new Promise((resolve, reject) => {
            //   console.log("Args URL: " + args.url)
              var tempUrl = args.url
              var n = tempUrl.indexOf("LoginMobile.cfm")
              var m = tempUrl.indexOf("auth=")
            //   console.log("n " + n + " m " + m)
              if (n != -1 && m != -1) {
                  var enurl = tempUrl.substr(n+21, tempUrl.length - 1)
                //   console.log("Encoded URL: " + enurl)
                  this.encodeUrl = enurl
              }
              if(this.encodeUrl.length > 0){
                  resolve(this.encodeUrl)
                //   console.log("Encoded Url resolved")
              }else{
                  reject(Error("Invalid url found"))
                //   console.log("Encoded Url rejected")
              }
          })
      },

      decodeUrl(encodedUrl) {
        //   console.log("decodeUrl called")
          return new Promise((resolve, reject) => {
              var decodedUrl = decodeURIComponent(encodedUrl)
            //   console.log("Decoded URL: " + decodedUrl)
              if(decodedUrl.length != 0) {
                  resolve(decodedUrl)
              }else{
                  reject(Error("Unable to decode url"))
              }
          })
      },

      serverCall(decodedUrl) {
        //   console.log("")
          return new Promise((resolve, reject) => {
              this.axios.get(decodedUrl)
              .then((response) => {
                //   console.log("Inside serverCall " + response.data)
                  resolve(response.data)
              }).catch((err) => {
                //   console.log("Inside serverCall error" + err)
                  reject(err)
              })
          })
      },

      getFirebaseToken() {
          console.log("Token Call")
          firebase.getCurrentPushToken().then((token) => {
              console.log("Token " + token)
          })
      },

      getSessionKey(args) {
        this.getDeviceTokenPromise(args)
        .then(this.decodeUrl)
        .then(this.serverCall)
        .then(data => {
            console.log("IdNumber: " + data.AuthProcess.idnumber)
            console.log("SessionKey: " + data.AuthProcess.sessionKey)
            this.getFirebaseToken()
        })
      }
  },
  data() {
      return {
          src: BASE_PATH + LOGIN_PATH,
          encodeUrl: ""
      }
  }
}
</script>

<style>

</style>
