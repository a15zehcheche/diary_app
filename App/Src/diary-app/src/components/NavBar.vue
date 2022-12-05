<template>
    <div class="nav-bar">
        <div class="nav-item active">
            <img src="@/assets/icons8-paper-80.png" width="35" alt="1">
        </div>
        <div class="nav-item">
            <img src="@/assets/icons8-calendar-80.png" width="35" alt="2">
        </div>
        <div class="nav-item">
            <img src="@/assets/icons8-neutral-trading-80.png" width="35" alt="3">
        </div>
        <div class="nav-item">
            <img src="@/assets/icons8-more-40.png" width="35" alt="4">
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script >
<style scoped>
    .nav-bar{
        display: grid;
        grid-template-columns: auto auto auto auto;
        height: 60px;
        width: auto;
        background-color: var(--c-1);
        border-bottom: var(--c-5) solid 1px;
    }
    .nav-bar > .nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .active{
        border-bottom: var(--c-5) solid 5px;
    }
</style>