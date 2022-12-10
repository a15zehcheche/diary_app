<template>
    <div class="nav-bar">
        <RouterLink to="/index.html" v-on:click="setTitle('Diary')">
            <div class="nav-item active">
                <img src="@/assets/icons8-paper-80.png" width="35" alt="1">
            </div>
        </RouterLink>
        <RouterLink to="/calendar" v-on:click="setTitle('Calendar')">
            <div class="nav-item">
                <img src="@/assets/icons8-calendar-80.png" width="35" alt="2">
            </div>
        </RouterLink>
        <RouterLink to="/traking" v-on:click="setTitle('Traking')">
            <div class="nav-item">
                <img src="@/assets/icons8-neutral-trading-80.png" width="35" alt="3">
            </div>
        </RouterLink>
        <RouterLink to="/setting" v-on:click="setTitle('Setting')">
            <div class="nav-item">
                <img src="@/assets/icons8-more-40.png" width="35" alt="4">
            </div>
        </RouterLink>
    </div>
</template>
<script>
export default {
    components: {
    },
    props: {
    },
    data() {
        return {
        };
    },
    methods: {
        setTitle(name) {
            this.$store.commit("setPageTitle",name)
          
        },
    },
}
</script >
<style scoped>
.nav-bar {
    display: grid;
    grid-template-columns: auto auto auto auto;
    height: 60px;
    width: auto;
    background-color: var(--c-1);
    border-bottom: var(--c-5) solid 1px;
}

.nav-bar .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.active {
    border-bottom: var(--c-5) solid 5px;
}
</style>