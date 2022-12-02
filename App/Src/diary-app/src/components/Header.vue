<template>
    <div class="the-header">
        <img src="@/assets/logo.png" width="40"  alt="" srcset="">
        <div class="title">Title</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .the-header{
        height: 60px;
        background-color: var(--c-3);
        color: var(--c-title);
        display: flex;
        align-items:center;
    }
    .the-header > .title{
        color: var(--c-title);
    }


</style>