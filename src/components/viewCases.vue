<template>
  <div>
    <b-row>
      <div class="col-sm-12 mt-2">
        <b-card title="Casos confirmados" bg-variant="dark" text-variant="white" class="alto">
          <b-icon-check class="h1 text-success" />
          <b-card-text class="float-right text-success text-center">
            {{ formatoMiles(datos.cases) }}
            <br />
            <span>
              <i>incremento+</i>
              {{ formatoMiles(datos.todayCases) }}
            </span>
          </b-card-text>
        </b-card>
      </div>

      <!-- Muertes -->
      <b-col cols="6" class="mt-2" shadow>
        <b-card bg-variant="dark" text-variant="white" class="alto">
          <b-card-text class>Muertes</b-card-text>
          <b-icon-person-dash class="h1 text-danger float-left" />
          <b-card-text class="float-right text-danger text-center">
            {{ formatoMiles(datos.deaths) }}
            <br />
            <span>+{{ formatoMiles(datos.todayDeaths) }}</span>
          </b-card-text>
        </b-card>
      </b-col>

      <!-- activos -->
      <b-col cols="6" class="mt-2" shadow>
        <b-card bg-variant="dark" text-variant="white" class="alto">
          <b-card-text class>Activos</b-card-text>
          <b-icon-people class="h1 text-primary float-left" />
          <b-card-text class="float-right text-primary text-center mt-3">{{ formatoMiles(datos.active) }}</b-card-text>
        </b-card>
      </b-col>

      <!-- recuperados -->
      <b-col cols="6" class="mt-2" shadow>
        <b-card bg-variant="dark" text-variant="white" class="alto">
          <b-card-text class>Recuperados</b-card-text>
          <b-icon-heart class="h1 text-info float-left" />
          <b-card-text class="float-right text-info text-center mt-3">{{ formatoMiles(datos.recovered) }}</b-card-text>
        </b-card>
      </b-col>

      <!-- prueba -->
      <b-col cols="6" class="mt-2" shadow>
        <b-card bg-variant="dark" text-variant="white" class="alto">
          <b-card-text class>Pruebas</b-card-text>
          <b-icon-clipboard-data class="h1 text-warning float-left" />
          <b-card-text class="float-right text-warning mt-3">{{ formatoMiles(datos.totalTests) }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "viewCases",
  data() {
    return {
      datos: {}
    };
  },
  computed: {},
  methods: {
    //...mapActions(['getWorld'])
    formatoMiles(Valor) {
      let nums = new Array();
      let simb = ".";
      Valor = Valor.toString();
      Valor = Valor.replace(/\D/g, "");
      nums = Valor.split("");
      let long = nums.length - 1;
      let patron = 3;
      let prox = 2;
      let res = "";
      while (long > prox) {
        nums.splice(long - prox, 0, simb);
        prox += patron;
      }
      for (let i = 0; i <= nums.length - 1; i++) {
        res += nums[i];
      }
      return res;
    },
    getWorld() {
      this.axios
        .get("https://coronavirus-19-api.herokuapp.com/countries/colombia")
        .then(result => {
          this.datos = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getWorld();
  },updated(){
      console.clear()
  }
};
</script>

<style scoped>
.alto {
  max-height: 200px;
}
</style>