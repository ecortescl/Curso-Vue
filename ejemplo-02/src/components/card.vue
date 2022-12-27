<template>

<div class="card" style="width: 18rem;">
  <imgCard :url="url"></imgCard>
  <div class="card-body bg-dark text-white m-2">
    <h5 class="card-title">{{ name }}</h5>
    <modal :url="url"></modal>
   
  </div>
</div>


</template>

<script>
import modal from '../components/modal.vue'
import imgCard from '../components/imgCard.vue'
export default {
  
  name: 'Card-Pokemon',
  components: {
    imgCard,
    modal
  },
  props: ['name', 'url']
 
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
