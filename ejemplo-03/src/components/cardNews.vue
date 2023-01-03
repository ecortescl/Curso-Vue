<template>
<div class="card-news p-1">

    <div class="header-news "> {{title}}</div>
    <div class="img-news"><img :src="img" /></div>

    <p class="text"> {{content}}</p>

    <a :href="route" class="btn btn-danger"> Ver Más </a>

</div>
</template>

<script>
export default {
    props: ['title', 'content', 'img', 'route']
}
</script>

<style>
.card-news {
    border-radius: 15px;
    padding: 10px;

}

.header-news {
    font-size: 1em;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #f1f1f1;
    border-radius: 25px 25px 0 0;
    padding: 10px;
    min-height: 100px;
}

.img-news img {
    width: 100%;
    min-height: 250px;
    object-fit: cover;
}

.text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
