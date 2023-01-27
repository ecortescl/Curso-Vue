<template>
<div class="about">
    <h1>INFORMACION COMPLETA DEL POKEMON</h1>

    <div class="container">

        <div class="row">

            <div class="col-lg-4"><img :src="MySprites.front_default"></div>

            <div class="col-lg-4">
                <h2>Habilidades</h2>
                <ul>
                    <li v-for="item in arrayDatos.abilities" :key="item">
                        {{item.ability.name}}
                    </li>
                </ul>
            </div>

            <div class="col-lg-4">
                <h2>Tipo</h2>
                <ul>
                    <li v-for="item in arrayDatos.types" :key="item">
                        {{item.type.name}}
                    </li>
                </ul>
            </div>


        </div>

    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'App',

    data() {
        return {
            arrayDatos: [],
            MySprites: [],

        }
    },

    created() {

        this.getList(this.$route.params.id);
    },
    methods: {
        getList(v) {
            const name = v
            console.log(name)
            var config = {
                method: 'get',
                url: `https://pokeapi.co/api/v2/pokemon/${name}`,
                headers: {}
            };

            axios(config)
                .then((response) => {
                    this.arrayDatos = response.data
                    this.MySprites = response.data.sprites
                    console.log(response.data)
                })
                .catch((e) => {
                    console.log(e);
                });

        }
    }
}
</script>
