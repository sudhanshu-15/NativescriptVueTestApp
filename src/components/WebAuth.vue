<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Login">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <WebView ref="loginWeb" :src="src" @loadFinished="getDeviceToken"></WebView>
  </Page>
</template>

<script>
import {BASE_PATH, LOGIN_PATH} from '../common/constants'
import * as WebViewMod from 'ui/web-view'
export default {
  methods: {
      getDeviceToken(args) {
        var enurl = "";
        var tempBool = false;
        console.log("url: " + args.url)
        var tempurl = args.url;                     //Get the URL which is returned after CAS login
        try{
            var n = tempurl.search("LoginMobile.cfm");             //Search for auth keyword in the returned URL
            var m = tempurl.search("auth=");
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
      }
  },
  data() {
      return {
          src: BASE_PATH + LOGIN_PATH
      }
  }
}
</script>

<style>

</style>
