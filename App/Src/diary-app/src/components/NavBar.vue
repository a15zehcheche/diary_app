<template>
    <div class="nav-bar">
        <RouterLink to="/index.html" v-on:click="setTitle('Diary'); slideTo(0);">
            <div class="nav-item " v-bind:class="{ 'active': $store.state.pageIndex == 0 }">
                <img src="@/assets/icons8-paper-80.png" width="35" alt="1">
            </div>
        </RouterLink>
        <RouterLink to="/calendar" v-on:click="setTitle('Calendar'); slideTo(1);">
            <div class="nav-item" v-bind:class="{ 'active': $store.state.pageIndex == 1 }">
                <img src="@/assets/icons8-calendar-80.png" width="35" alt="2">
            </div>
        </RouterLink>
        <RouterLink to="/traking" v-on:click="setTitle('Traking'); slideTo(2);">
            <div class="nav-item" v-bind:class="{ 'active': $store.state.pageIndex == 2 }">
                <img src="@/assets/icons8-neutral-trading-80.png" width="35" alt="3">
            </div>
        </RouterLink>
        <RouterLink to="/setting" v-on:click="setTitle('Setting'); slideTo(3);">
            <div class="nav-item" v-bind:class="{ 'active': $store.state.pageIndex == 3 }">
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
            pages: [1, 0, 0, 0]
        };
    },
    methods: {
        slideTo(index) {
            this.$store.state.swiper.slideTo(index)
        },
        setTitle(name) {
            this.$store.commit("setPageTitle", name)

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
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: var(--c-5) solid 3px;
}
</style>