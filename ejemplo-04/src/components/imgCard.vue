<template>
   <img :src="imgs" class="card-img-top" >
  </template>
  
  <script>
  
  import axios from 'axios'
  export default {
    name: 'Card-Pokemon',
    props: ['url'],
    created(){
      this.getSpritePokemon(this.url)
    },
    data(){
      return{
        imgs: '',
      }
    },
    methods:{

      getSpritePokemon(url){
        var config = {
              method: 'get',
              url: url,
              headers: { }
            };

            axios(config)
            .then((response) => {
              console.log(response.data)
             this.imgs = response.data.sprites.front_default
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
  