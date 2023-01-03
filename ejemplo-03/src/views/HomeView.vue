<template>
<div class="container ">
    <!-- SEARCH -->
    <form v-on:submit.prevent="this.getNews(this.consulta)">
        <div class="row mb-4">
            <div class="col-8">
                <input type="text" placeholder="¿Que Buscas?..." v-model="consulta" class="form-control">
            </div>
            <div class="col-4">
                <button class="btn btn-success w-100">Buscar</button>
            </div>

        </div>
    </form>
    <!-- SEARCH -->

    <!-- GRID NEWS -->
    <div class="row">
   
            <cardNews class="col-lg-4" v-for="item in resultsNews" :key="item" :img="item.urlToImage" :route="item.url" :title="item.title" :content="item.description" />
  

    </div>

    <!-- GRID NEWS -->

</div>
</template>

<script>
// @ is an alias to /src
import cardNews from '@/components/cardNews.vue'
import axios from 'axios'

export default {
    name: 'HomeView',
    components: {
        cardNews
    },
    data() {
        return {
            resultsNews: [],
            consulta: 'bitcoin'

        }
    },
    methods: {

        getNews(consulta) {
            let q = consulta
            var config = {
                method: 'get',
                url: `https://newsapi.org/v2/everything?q=${q}&apiKey=59a6804e2a374514b7d2f5dfe60eb72d`,
                headers: {}
            };

            axios(config)
                .then((response) => {
                    this.resultsNews = response.data.articles
                    console.log(this.resultsNews)
                })
                .catch((e) => {
                    console.log(e);
                });

        }

    }

}
</script>
