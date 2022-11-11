<template>
  <div class="box-resumen">
    <v-container>
      <v-row class="row1">
        <v-col class="text-center">
          <h1 class="colorWhite">Resumen</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6">
          <v-col cols="12" class=" colorWhite text-center  text-h5">
            Experiencia
          </v-col>
          <v-card
            class="mx-auto"
            outlined
            elevation="5"
            dark
            color="#212529"
          >
            <v-timeline
              class="timeLineExperience"
              dense
            >
            <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-down-right" class="elevation-2">
                  <v-card-title class="text-h5">
                    Front-end Developer 
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2022 - Actualidad | Quental
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                   Front-end Desarrollador de proyectos ClimateTrade
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-down-right" class="elevation-2">
                  <v-card-title class="text-h5">
                    Front-end Developer Vue.Js
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2019 - 2022 | Global Planning Solutions
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Programación y maquetación de aplicación, UX designer, y optimización de software planificación de personal, fichaje web y gestión del tiempo.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-right" class="elevation-2">
                  <v-card-title class="text-h5">
                    Front-end Developer Web Master
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2018 - 2019 | Mediamarkt Iberia
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Maquetación y programación de landings pages para campañas de marketing, marcas de producto (Html, CSS, JQuery, PHP, VueJs). Gestión y mantenimiento de la plataforma e-comerce. Digital experience. Maquetación y gestión de campañas email-marketing (plataforma emarsys).
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-up-right" class="elevation-2">
                  <v-card-title class="text-h5">
                    Web Development webmaster
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2017 - 2018 | Mediamarkt E-Commerce AG
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Gestión y mantenimiento de la plataforma e-comerce. Publicaciones web Digital experience.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6">
          <v-col cols="12" class=" colorWhite text-center  text-h5">
            Educación
          </v-col>
          <v-card
            class="mx-auto"
            outlined
            elevation="5"
            dark
            color="#212529"
          >
            <v-timeline
              class="timeLineExperience"
              dense
            >
              <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-down-left" class="elevation-2">
                  <v-card-title class="text-h5">
                    Títulos certificaciones
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2017 - 2019 | Udemy Academy
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Desarrollo web, contenido digital/multimedia y recursos informáticos. Vue.Js, Angular.Js, Webpack, Git-Hub, EcmaScrip6, Material design, Vuetify, Boostrap, Metodologias agiles.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item class="itemExperience" color="#25CA7F">
                <v-card data-aos="fade-up-left" class="elevation-2">
                  <v-card-title class="text-h5">
                    Grado Desarrollo app Web
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2016 - 2018 | Nicolau Copernic
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Sistemas informáticos (Windows, Linux) - Lenguaje de marcas (HTML5, XML) - Lenguaje servidor (PHP, laravel) - Lenguaje cliente (JavaScript, Jquery) - Frameworks (VueJs, AngularJs) - Multiplataforma (java) - Base de datos ( MySQL, MongoDb) - Hojas de estilo (CSS3) - Accesibilidad y usabilidad.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <!-- <v-timeline-item color="#25CA7F">
                <v-card class="elevation-2">
                  <v-card-title class="text-h5">
                    Web Development webmaster
                  </v-card-title>
                  <v-card-subtitle>
                    <span class="colorGreen">
                      <v-icon color="#25CA7F" small>mdi-calendar-month</v-icon>
                      &nbsp; 2017 - 2018 | Mediamarkt E-Commerce AG
                    </span>
                  </v-card-subtitle>
                  <v-card-text>
                    Gestión y mantenimiento de la plataforma e-comerce. Publicaciones web Digital experience.
                  </v-card-text>
                </v-card>
              </v-timeline-item> -->
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-row class="row1">
        <v-col class="text-center">
          <h1 class="colorWhite">Habilidades</h1>
        </v-col>
      </v-row>
      <v-row class="contentHability elevation-5 mb-5">
        <v-col cols="12" lg="6">
          <div class="text-center">
            <!-- <b-button class="ml-3" @click="startLoading()">Reload</b-button> -->
          </div>
          <div class="d-flex flex-column mb-3">
            <div class="d-flex justify-space-between mb-3">
              <span class="colorWhite">HTML5</span>
              <span class="colorWhite">98%</span>
            </div>
            <div>
              <v-progress-linear
                v-model="value98"
                color="deep-purple accent-4"
                height="10"
              ></v-progress-linear>
            </div>
          </div>
          <br>
          <div class="d-flex flex-column mb-3">
            <div class="d-flex justify-space-between mb-3">
              <span class="colorWhite">JavaScript</span>
              <span class="colorWhite">85%</span>
            </div>
            <v-progress-linear
              v-model="value85"
              color="pink"
              height="10"
            >
              <!-- <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template> -->
            </v-progress-linear>
          </div>
          <br>
          <div class="d-flex flex-column mb-3">
            <div class="d-flex justify-space-between mb-3">
              <span class="colorWhite">CSS3</span>
              <span class="colorWhite">90%</span>
            </div>
            <v-progress-linear
              v-model="value90"
              color="indigo darken-2"
              height="10"
            ></v-progress-linear>
          </div>
          <br>
          <div class="d-flex flex-column mb-3">
            <div class="d-flex justify-space-between mb-3">
              <span class="colorWhite">UI/UX designer</span>
              <span class="colorWhite">77%</span>
            </div>
            <v-progress-linear
              v-model="value77"
              color="amber"
              height="10"
            ></v-progress-linear>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="6" class="text-center">
              <v-progress-circular
                data-aos="flip-left"
                :rotate="-90"
                :size="180"
                :width="15"
                :value="value90"
                color="deep-purple accent-4"
              >
                <span class="colorWhite d-flex flex-column">
                <b>{{ value90 }}%</b>
                <b>Vue JS</b>
                </span>
              </v-progress-circular>
            </v-col>
            <v-col cols="6" class="text-center">
              <v-progress-circular
                data-aos="flip-left"
                :rotate="-90"
                :size="180"
                :width="15"
                :value="value80"
                color="indigo darken-2"
              >
                <span class="colorWhite d-flex flex-column">
                <b>{{ value80 }}%</b>
                <b>JQuery</b>
                </span>
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="text-center">
              <v-progress-circular
                data-aos="flip-right"
                :rotate="-90"
                :size="180"
                :width="15"
                :value="value60"
                color="amber"
              >
                <span class="colorWhite d-flex flex-column">
                <b>{{ value60 }}%</b>
                <b>Photoshop</b>
                </span>
              </v-progress-circular>
            </v-col>
            <v-col cols="6" class="text-center">
              <v-progress-circular
                data-aos="flip-right"
                :rotate="-90"
                :size="180"
                :width="15"
                :value="value90"
                color="deep-purple accent-4"
              >
                <span class="colorWhite d-flex flex-column">
                <b>{{ value90 }}%</b>
                <b>Web Design</b>
                </span>
              </v-progress-circular>
            </v-col>
          </v-row>
          
        </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Resumen',
    components: {
    },
    data: () => ({
      value98: 98,
      value85: 85,
      value90: 90,
      value77: 77,
      value80: 80,
      value60: 60
    }),
     watch: {
      
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
.box-resumen {
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
.itemExperience {
  transition: transform 1s;
}
.itemExperience:hover {
  transform: scale(1.02);
}
.contentHability {
  background: #1E1E1E;
}
</style>


