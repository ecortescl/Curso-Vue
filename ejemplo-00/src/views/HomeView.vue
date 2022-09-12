<template>
  <div>
    <div class="card">
      <h4><strong class="txt">Mi Perfil:</strong> {{ nombre }}</h4>
      <h4><strong class="txt">Mi Edad:</strong> {{ edad }}</h4>
      <h4><strong class="txt">Mi Prefesion:</strong> {{ profesion }}</h4>

      <hr />

      <button class="btn" v-on:click="mostrar()">Mirar</button>
    </div>
    <div class="alert mt-4" v-show="show">
      <h5>Mi sueldo</h5>
      <br />
      $ {{ formatPrice(sueldo) }}
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "Esteban Cortes",
      edad: "29",
      profesion: "programador",
      sueldo: 1500000,
      show: false,
      array: [],
    };
  },
  methods: {
    mostrar() {
      const validar = this.show;
      if (validar == true) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style>
.card {
  background: #c1c1c1;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  width: 350px;
  margin: auto;
}

.btn {
  background: #971010;
  color: #fff;
  border: none;
  width: 100%;
  border-radius: 15px;
  padding: 10px;
}
.btn:hover {
  background: #570a0a;
  color: #fff;
  border: none;
  width: 100%;
  border-radius: 15px;
  padding: 10px;
}
.alert {
  background: #971010;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  width: 350px;
  margin: auto;
  color: #fff;
  font-size: 36px;
}

.mt-4 {
  margin-top: 45px;
}
.txt {
  font-weight: bold;
  color: #fff019;
}
</style>
