<template>
<div class="container">
    <div class="row p-2">
        <div class="col-lg-12 mb-2">
          <img src="../public/pokemon.webp" alt="">
        </div>
        <card class="col-lg-3" 
        v-for="item in arrayDatos" 
        :key="item" 
        :id="item.id" 
        :name="item.name" 
        :url="item.url" 
        />
    </div>
</div>
</template>

<script>
import card from './components/card.vue'
import axios from 'axios'
export default {
    name: 'App',
    components: {
        card
    },

    data() {
        return {
            arrayDatos: [],
        }
    },

    created() {
        this.getList();
    },
    methods: {
        getList() {
            var config = {
                method: 'get',
                url: 'https://pokeapi.co/api/v2/pokemon/',
                headers: {}
            };

            axios(config)
                .then((response) => {
                    this.arrayDatos = response.data.results
                    console.log(response.data.results)
                })
                .catch((e) => {
                    console.log(e);
                });

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
