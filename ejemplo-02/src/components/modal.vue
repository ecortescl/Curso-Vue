<template>
<div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#pokemon'+datos.id">
        Más Información
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="'pokemon'+datos.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nombre: {{datos.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body"> 
                    <imgCard :url="url"></imgCard>

                    <ul class="list-group bg-light text-dark m-4">
                        <li class="list-group-item bg-light text-dark" v-for="habilidad in (datos.abilities)" :key="habilidad.id"> {{habilidad.ability.name}}</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

   
<script>
import axios from 'axios'
import imgCard from '../components/imgCard.vue'
export default {
    name: 'Card-Pokemon',
    props: ['url'],
    created() {
        this.getSpritePokemon(this.url)
    },
    components: {
        imgCard
    },
    data() {
        return {
            datos: '',
        }
    },
    methods: {

        getSpritePokemon(url) {
            var config = {
                method: 'get',
                url: url,
                headers: {}
            };

            axios(config)
                .then((response) => {
                    this.datos = response.data
                })
                .catch((e) => {
                    console.log(e);
                });

        }

    }

}
</script>

   <!-- Add "scoped" attribute to limit CSS to this component only -->
   
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
