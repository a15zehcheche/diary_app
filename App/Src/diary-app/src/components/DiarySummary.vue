<template lang="">
    <div class="box">
        <div class="header">
            <div class="title">Titlesdfsdfsad sdfsdfsd fsdfsdfsdfs fsfsfsdfsdfsd fsdffd</div>
            <img src="@/assets/face/icons8-happy-80.png" width="40" alt="mood">
        </div>
        <div class="content">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi eum veritatis necessitatibus enim sint nam, qui obcaecati quam quaerat cumque aperiam natus architecto repellat reiciendis quia voluptates ipsa alias!
            </p>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    height: 180px;
    max-width: 100%;
    width: 330px;
    margin: 20px 0;
    padding: 20px;
    border: 2px solid var(--c-5);
    background-color: var(--c-1);
    display:inline-block;
    box-sizing: border-box;
}
.header{
    display: flex;
    justify-content: space-between;
    font-size: var(--f-s-title);
}
.header > .title{
    max-width: 70%;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content{
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;


   }
</style>