<template>
  <section class="container is-fluid">
    <navbar></navbar>
    <!-- <sidebar></sidebar> -->
    <!-- <homeview></homeview> -->
  </section>
</template>
<script>
import navbar from "./components/navBar.vue";
import sidebar from "./components/sideBar.vue";
import homeview from './views/HomeView.vue';

export default {
  components: {
    // sidebar,
    navbar,
    // homeview
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Koulen&family=Macondo&family=Montserrat:wght@200;500&family=Nunito+Sans:wght@200&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;1,300&family=Raleway:ital,wght@0,300;0,500;1,200&display=swap');
section{
  background-color: #0d0d0f;
  font-family: 'Akshar', sans-serif;
font-family: 'Koulen', cursive;
font-family: 'Macondo', cursive;
font-family: 'Montserrat', sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'Pacifico', cursive;
font-family: 'Poppins', sans-serif;
font-family: 'Raleway', sans-serif;
}
</style>