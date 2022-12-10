<template>
    <div class="the-header">
        <img src="@/assets/logo.png" width="40"  alt="" srcset="">
        <div class="title">{{this.$store.state.pageTitle}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:"",
        };
    },
}
</script>
<style scoped>
    .the-header{
        height: 60px;
        background-color: var(--c-3);
        color: var(--c-title);
        font-size: var(--f-s-title);
        display: flex;
        align-items:center;
        position: relative;
        justify-content:center;
    }
    .the-header > .title{
        color: var(--c-title);
        font-size: var(--f-title);

    }

    .the-header > img{
        left: 10px;
        position: absolute;
    }


</style>