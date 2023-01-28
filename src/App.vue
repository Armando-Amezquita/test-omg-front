<script >
  import Header from './components/Header.vue';
  import Login from './view/Login.vue';

  export default {
    components: {
      Header,
      Login
    }
  }

</script>

<template>
  <!-- <Login /> -->
  <router-view />
</template>

<style scoped>

</style>
