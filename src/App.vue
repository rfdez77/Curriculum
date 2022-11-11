<template>
  <v-app>
     <b-navbar toggleable="sm" type="dark" variant="dark" class="barraNav">
      <b-container>
        <b-navbar-brand :to="{name:'Home'}">
          <!-- <img class="imgLogo" src="./assets/myAvatar.png"> -->
          <span class="title_CV">RF</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="text-center">
              <b-nav-item class="itemNav" :to="{name:'AboutMe'}">Sobre mi</b-nav-item>
              <b-nav-item class="itemNav" :to="{name:'Resume'}">Resumen</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
            
      
  }),
};
</script>

<style scoped>
  .barraNav {
    z-index: 10;
    position: fixed;
    width: 100%;
  }
  .imgLogo {
    width: 50px;
    transition: all .5s linear;
  }
  .imgLogo:hover {
    transform: scale(1.05);
  }
  .title_CV {
    color: #24C97E;
    font-size: 32px;
    font-weight: 600;
  }
  .nav-link {
    transition: all .5s linear;
  }
  .nav-link:hover {
    transform: scale(1.05);
  }
  .router-link-active {
    color: #25CA7F !important;
  }
</style>
