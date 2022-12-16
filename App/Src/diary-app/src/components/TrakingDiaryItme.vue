<template lang="">
    <div class="item">
        <div class="date-box">
            <div class="date">
                data 
                <div class="week">su</div>
            </div>
            <div class="my-hr"></div>
            <img src="@/assets/sort-down.png" width="20"  alt=""/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            diary: this.$store.state.diarys[0]
        }
    },
}
</script>
<style scoped>
.item {
    height: 150px;
    width: 100vw;
}

.date-box {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: top left;
    transform: translateX(50px)  rotate(90deg)
}
.date{
  display: flex;  

}
.week{
    transform-origin: center;
    transform: rotate(90deg);
    font-weight: 500
}

.my-hr {
    width: 150px;
    border-bottom: var(--c-5) 3px solid;
}
</style>