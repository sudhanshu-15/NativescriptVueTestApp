<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <ScrollView  class="test" id="sViewe">
    <StackLayout orietation= "veritcal">
      <!-- <Image src="res://img_institute_moto" stretch="none" horizontalAlignment="center" class="logo"/> -->
      <android>
        <StackLayout orietation="vertical" class="stack" id="buStack" :opacity="opacity">
          <Button text="Login" horizontalAlignment="center" class="buttona" @tap="$router.push('/webauth')"/>
          <Button text="Help" horizontalAlignment="center" class="buttona" tap="changeBg"/>
        </StackLayout>
      </android>
      <ios>
        <StackLayout orietation="vertical" class="stacki" id="buStack">
          <Button text="Login" horizontalAlignment="center" class="buttoni" @tap="$router.push('/WebAuth')"/>
          <Button text="Help" horizontalAlignment="center" class="buttoni" tap="changeBg"/>
        </StackLayout>
      </ios>
    </StackLayout>
  </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      opacity: 0,
    }
  },
  methods: {
    goToWebAuthPage() {
      console.log("Pressed")
      $router.push('/webauth')
    },
    changeBg() {
      console.log("Change Bg")
    }
  },
  created() {
    setInterval(() => {
      if(this.opacity >= 1){
        return
      }
      this.opacity += 0.07
    }, 100)
  }
}
</script>

<style scoped>
.test {
    background-color: #b74c4c; 
    background-size: cover;
}

.stack {
    margin-left: 95;
    margin-right: 95;
    margin-top: 250;
    padding-bottom: 10;
    background-color: white;
    border-radius: 20;
    min-width: 150;
    min-height: 105;
}

.buttona {
    margin: 10;
    padding: 2;
    font-size: 18;
    background-color: #990000;
    color: white;
    border-radius: 10;
    min-width: 50;
}

Button:highlighted { 
    background-color: #ac1710;
    color: white;
}


.action-image {
    width: 25;
    height: 25;
}

.action-label {
    font-size: 18;
    font-weight: bold;
}

.logo {
    margin-top: 10;
    margin-left: 10;
    margin-right: 10;
    margin-bottom: 50;
}

.stacki {
    margin-left: 180px;
    margin-right: 180px;
    margin-top: 500px;
    padding-bottom: 10px;
    background-color: white;
    border-radius: 20px;
    min-width: 150;
    min-height: 100px;
}

.buttoni {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    margin-left: 20px;
    padding: 2px;
    font-size: 24pt;
    background-color: #990000;
    color: white;
    border-radius: 10px;
    min-width: 80;
    min-height: 40;
}
</style>


