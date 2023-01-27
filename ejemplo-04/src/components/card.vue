<template>

<div class="card" style="width: 18rem;">
  <imgCard :url="url"></imgCard>
  <div class="card-body bg-dark text-white m-2">
    <h5 class="card-title">{{ name }}</h5>
    <a :href="'/about/'+name" class="btn btn-danger">Ver mas</a> 

   
  </div>
</div>


</template>

<script>

import imgCard from '../components/imgCard.vue'
export default {
  
  name: 'Card-Pokemon',
  components: {
    imgCard,

  },
  props: ['name', 'url', 'id']
 
}
</script>

