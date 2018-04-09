<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <ScrollView id="sViewe">
    <AbsoluteLayout backgroundColor="#a31919">
      <!-- <Image src="res://img_institute_moto" stretch="none" horizontalAlignment="center" class="logo"/> -->
        <StackLayout orientation="vertical" top="200" left="100" class="stack">
          <Button text="Login" horizontalAlignment="center" @tap="goToWebAuthPage" class="buttons"/>
          <Button text="Help" horizontalAlignment="center" @tap="changeBg" class="buttons" marginBottom="16"/>
        </StackLayout>
    </AbsoluteLayout>
  </ScrollView>

  </Page>
</template>

<script>
export default {
  methods: {
    goToWebAuthPage() {
      console.log("Pressed")
    },
    changeBg() {
      console.log("Change Bg")
    }
  }
}
</script>

<style scoped>
.stack {
  background-color: #ebebeb;
  width: 50%;
  border-radius: 20;
  opacity: 20%;
}
.buttons {
  background-color: #990000;
  color: #ffffff;
  margin-top:16;
  border-radius:8;
}
</style>

