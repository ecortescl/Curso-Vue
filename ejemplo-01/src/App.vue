<template>
  <div >
<div style="width:300px; margin:auto; background:#c1c1c1; text-align:left">
    <h3 style="padding:10px">For simple frutas</h3>
    <ul>
      <li v-for="item in arrayData" :key="item" >
        {{item.name}} {{item.price}}
      </li>
    </ul>
    </div>
    <hr>
  <div style="width:300px; margin:auto; background:#c1c1c1; text-align:left">
    <h3 style="padding:10px">For avanzado con api UF</h3>
  
     <ul>
      <li v-for="item2 in arrayDatauf" :key="item2" >
        $ {{item2.valor}} 
      </li>
    </ul>
</div>
  </div>
 
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  created(){
    this.getList();
  },
  data(){
    return{
      arrayDatauf:[],
      arrayData:[
         {
            name: "Manzana",
            price: "$1000",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2000",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3000",
            description: "Una naranja",
        },
      ]
      
    }
  },
  methods:{

    getList() {
      axios.get('https://mindicador.cl/api/uf').then((response) => {
        console.log(response.data)
        this.arrayDatauf = response.data.serie
      })

  }
  }
 

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
