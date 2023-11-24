<template>
  <div>
    <div class="box-img">
      <v-img src="../assets/fondo.png" class="imgFondo"></v-img>
      <section class="intro selector">
        <h1 class="colorWhite cd-headline rotate-1">Raúl Fernández
          <br>
          <span data-aos="zoom-in-down" class="colorWhite">I am </span>
          <span class="cd-words-wrapper">
            <b class="animated zoomInDown colorGreen is-visible">&nbsp;Front-end</b>
            <!-- <b class="colorGreen">sushi</b> -->
            <!-- <b class="colorGreen">steak</b> -->
          </span>
        </h1>
      </section> <!-- cd-intro -->
    </div>
    <!-- <div class="box-imgFondoImg">
      <v-img src="../assets/Raul.png" class="imgFondoImg"></v-img>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
  
    },
     data: () => ({
    }),
    mounted() {
    
    }
  }
</script>

<style>
/* para chrome */
    ::-webkit-scrollbar {
        width: 7px;
        background-color: white;
    }
    ::-webkit-scrollbar-thumb {
        width: 7px;
        background: #5b5959; 
        border-radius: 5px; 
    }
/* para mozilla */
    ::-moz-scrollbar {
        width: 7px;
        background-color: white;
    }
    ::-moz-scrollbar-thumb {
        width: 7px;
        background: #5b5959; 
        border-radius: 5px; 
    }
/* para internet explorer */
    ::-ms-scrollbar {
        width: 7px;
        background-color: white;
    }
    ::-ms-scrollbar-thumb {
        width: 7px;
        background: #5b5959; 
        border-radius: 5px; 
    }
.box-img {
  overflow: hidden;
  height: 100vh !important;
}
.box-img .v-responsive {
  position: fixed !important;
  height: inherit !important;
  background-size: cover;
  top: 4rem;
  width: 100vw !important;
}
.box-img img {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.box-imgFondoImg {
  position: absolute;
  float: right;
  width: 25%;
  /* height: 80%; */
  bottom: 0px;
  right: 6%;
}
.imgFondoImg {
  width: 100%;
  z-index: 1;
  float: right;
}
.intro {
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 2;
}
@media (max-width: 600px) {
  .intro {
    left: 15%;
  }
  .box-imgFondoImg  {
    width: 30%;
  }
}
.colorWhite {
  color: #fff;
}
.colorGreen {
  color: #25CA7F;
}
</style>
