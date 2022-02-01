<template>
  <div class="box-about">
    <v-container>
      <v-row class="row1">
        <v-col class="text-center">
          <h1 class="colorWhite">Sobre mi</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card color="#000" dark>
            <v-container>
              <v-row class="d-flex flex-no-wrap">
                <v-col cols="12" md="4">
                  <v-avatar
                    class="ma-5 imgCard"
                    data-aos="zoom-in"
                  >
                    <v-img src="../assets/raul_f.png"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card-title class="text-h3">Raúl Fernández</v-card-title>
                  <br>
                  <v-card-subtitle class="colorGreen text-h5">645770076</v-card-subtitle>
                  <v-card-subtitle class="text-h5">raulfdez30@hotmail.com</v-card-subtitle>
                  <v-card-subtitle class="colorGreen text-h5">Terrassa - Barcelona</v-card-subtitle>
                </v-col>
                <v-col cols="12" class="text-center">
                  <span>Me considero una persona, ágil, dinámica, con organización y adaptación de trabajar en equipo para aportar mis conocimientos, esfuerzo y tesón a las tareas en las que participo.</span>
                  <br>
                  <span>Siempre con intención de superar los retos que cada proyecto supone y con ambición de aprender y mejorar profesionalmente.</span>
                </v-col>
                <v-col cols="6">
                  <v-card-actions class="actionsCard d-flex justify-space-around">
                    <div class="d-flex">
                      <v-btn
                        color="#25CA7F"
                        class="ml-2 mt-5"
                        outlined
                        fab
                        small
                      >
                        <v-icon color="#fff">mdi-account</v-icon>
                      </v-btn>
                      <div class="mt-4 ml-3 d-flex flex-column">
                        <span>4 Años desarrollador</span> 
                        <span class="colorGreen">Experiencia</span>
                      </div> 
                    </div>
                    <div class="d-flex">
                      <v-btn
                        color="#25CA7F"
                        class="ml-2 mt-5"
                        outlined
                        fab
                        small
                      >
                        <v-icon color="#fff">mdi-clipboard-clock</v-icon>
                      </v-btn>
                      <div class="mt-4 ml-3 d-flex flex-column">
                        <span>Web Content Management</span> 
                        <span class="colorGreen">Gestión</span>
                      </div> 
                    </div>
                  </v-card-actions>
                </v-col>
                <v-col cols="6">
                  <v-card-actions class="actionsCard d-flex justify-space-around">
                    <div class="d-flex">
                      <v-btn
                        color="#25CA7F"
                        class="ml-2 mt-5"
                        outlined
                        fab
                        small
                      >
                        <v-icon color="#fff">mdi-code-braces</v-icon>
                      </v-btn>
                      <div class="mt-5 ml-3 d-flex flex-column">
                        <span>Developer</span> 
                        <span class="colorGreen">Front-end</span>
                      </div> 
                    </div>
                    <div class="d-flex">
                      <v-btn
                        color="blue-grey"
                        class="ma-2 mt-6 white--text"
                        
                        href="RaulFdez.pdf" 
                        target="_blank"
                      >
                        Download CV
                        <v-icon
                          right
                          dark
                        >
                          mdi-cloud-download
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-card-actions>
                </v-col>

              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="row1">
        <v-col class="text-center">
          <h1 class="colorWhite">Métodos</h1>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col  
          v-for="(item, i) in itemsCardMetods"
          :key="i" 
          cols="12" 
          sm="6" 
        >
          <v-card
            data-aos="flip-up"
            class="text-center cardMetods"          
            dark
            :color="item.color"
          >
           <v-btn
              color="#fff"
              class="ml-2 mt-5 btnMetods"
              outlined
              fab
              small
            >
              <v-icon color="#fff">{{item.icon}}</v-icon>
            </v-btn>
            <div class="d-flex justify-center">
              <v-card-title
                class="text-h5"
                v-text="item.title"
              >
              </v-card-title>
            </div>

            <v-card-subtitle v-text="item.content">
              
            </v-card-subtitle>

             <v-avatar
                  class="ma-3 imgMetods"
                  size="250"
                  tile
                >
                  <v-img :src="require(`../assets/`+item.src)"></v-img>
                </v-avatar>

            <!-- <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-avatar
                  class="ma-3"
                  size="250"
                  tile
                >
                  <v-img :src="require(`../assets/`+item.src)"></v-img>
                </v-avatar>
              </div>
            </v-expand-transition> -->
          </v-card>
        </v-col>
      </v-row>





    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    components: {
    },
     data: () => ({
       itemsCardMetods: [
         {
          color: '#011223',
          icon: 'mdi-monitor',
          title: 'Web Design',
          content: 'Planificación, diseño, implementación y mantenimiento de sitios web. Metodología utilizada por los diseñadores, basada en la lógica para crear resultados optimos.',
          src: 'web-design.png',
        },
        {
          color: '#011223',
          icon: 'mdi-cogs',
          title: 'Web Development',
          content: 'Realización y desarrollo de todo tipo de proyectos y páginas web, haciendo uso de tecnologias de sofware del lado cliente y servidor.',
          src: 'development.jpg',
        },
        {
          color: '#011223',
          icon: 'mdi-cellphone',
          title: 'Responsive Design',
          content: 'Adaptabilidad de las páginas web a todo tipo de medios, pantallas y dispositivos desde donde se van a acceder.',
          src: 'responsive-design.jpg',
        },
        {
          color: '#011223',
          icon: 'mdi-briefcase-edit-outline',
          title: 'Marketing',
          content: 'Técnicas y estudios con el objetivo de mejorar la comercialización del producto.',
          src: 'Marketing.jpg',
        },
       ],
       show: false     
      
    }),
  }
</script>

<style lang="scss" scoped>
.box-about {
  background: #212529;
  height: auto;
  width: 100vw;
}
.row1 {
  margin-top: 5.5rem;
}
.colorWhite {
  color: #fff;
}
.colorGreen {
  color: #25CA7F;
}
.imgCard {
  width: 300px !important;
  height: 300px !important;

}
.imgCard img {
  border-radius: 50%;
}
@media only screen and (max-width: 780px) {
  .imgCard img {
    width: 150px;
    height: 150px !important;
  }
  .actionsCard {
    display: flex;
    flex-direction:column;
  }
}
@media only screen and (min-width: 600px) and (max-width: 930px) {
  .imgMetods {
    width: 200px !important;
  }
}
.imgMetods {
  display: none;
}
.cardMetods {
  transition: transform 1s;
  min-height: 200px;
}
.btnMetods {
  transition: all .5s linear;
}
.cardMetods:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  .btnMetods {
    color: #25CA7F !important;
    transform: rotateY(360deg);
  }
}
</style>
