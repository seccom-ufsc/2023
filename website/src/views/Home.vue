<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StartPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartPage from '@/components/StartPage.vue'

export default {
  name: 'Home',
  components: {
    StartPage
  }
}
</script>
