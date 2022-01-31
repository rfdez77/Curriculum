<template>
  <div class="box-img">
    <v-img src="../assets/fondo.png"></v-img>
    	<section class="intro selector">
        <h1 class="cd-headline rotate-1">
          <span data-aos="zoom-in-down" class="colorWhite">I am</span>
          <span class="cd-words-wrapper">
            <b class="animated zoomInDown colorGreen is-visible">pizza</b>
            <b class="colorGreen">sushi</b>
            <b class="colorGreen">steak</b>
          </span>
        </h1>
      </section> <!-- cd-intro -->
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
      $(function () {
        $('.selector').animatedHeadline();
      })
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
  top: 4rem;
}
.box-img img {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.intro {
  position: absolute;
  left: 45%;
  top: 45%;
}
@media (max-width: 600px) {
  .intro {
    left: 35%;
  }
}
.colorWhite {
  color: #fff;
}
.colorGreen {
  color: #25CA7F;
}
</style>
