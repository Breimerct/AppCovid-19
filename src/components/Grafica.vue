<template>
  <div class="mt-5">
    <div>
      <h2 class="card-title">Estadisticas</h2>
    </div>

    <div>
      <!-- <canvas id="fooCanvas" count="2" /> -->

      <chartjs-bar
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="datas"
        :datalabel="dataLabel"
        :labels="labels"
        
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Grafica",
  data() {
    return {
      beginZero: true,
      labels: ["Muertes", "Activos", "Recuperados", "Pruebas"],
      datas: [14216, 546, 10210, 3460, 177050],
      bgColor: "#FCF924",
      borderColor: "#0c0306",
      dataLabel: "colombia"
    };
  },
  methods:{
      async getCountries(){
          await this.axios.get('colombia')
          .then((result) => {
              this.datas = [];
              this.datas[0] = result.data.cases;
              this.datas[1] = result.data.active;
              this.datas[2] = result.data.recovered;
              this.datas[3] = result.data.totalTests;
              //console.log(result.data);
          }).catch((err) => {
              console.log(err);
          });
      }
  },
  created(){
      this.getCountries();
  }
};
</script>