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
      getDeviceToken() {
        console.log("url: " + this.src)
      }
  },
  mounted() {
    //   this.$refs.loginWeb.nativeView.src = 'http://www.google.com'
      this.$refs.loginWeb.nativeView.on(WebViewMod.WebView.loadFinishedEvent, (args) => {
            console.log("Load finished: " + args.url)
        })
  },
  data() {
      return {
          src: 'http://google.com/'
      }
  }
}
</script>

<style>

</style>
