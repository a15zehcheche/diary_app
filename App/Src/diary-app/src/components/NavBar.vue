<template>
    <div class="nav-bar">
        <RouterLink to="/index.html" v-on:click="setTitle('Diary')">
            <div class="nav-item " v-bind:class="{ 'active': pages[0] }">
                <img src="@/assets/icons8-paper-80.png" width="35" alt="1">
            </div>
        </RouterLink>
        <RouterLink to="/calendar" v-on:click="setTitle('Calendar')">
            <div class="nav-item" v-bind:class="{ 'active': pages[1] }">
                <img src="@/assets/icons8-calendar-80.png" width="35" alt="2">
            </div>
        </RouterLink>
        <RouterLink to="/traking" v-on:click="setTitle('Traking')">
            <div class="nav-item" v-bind:class="{ 'active': pages[2] }">
                <img src="@/assets/icons8-neutral-trading-80.png" width="35" alt="3">
            </div>
        </RouterLink>
        <RouterLink to="/setting" v-on:click="setTitle('Setting')">
            <div class="nav-item" v-bind:class="{ 'active': pages[3] }">
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
        setTitle(name) {
            this.pages = [0,0,0,0]
            switch (name) {
                case "Diary":
                    this.pages[0] = 1
                    break;
                case "Calendar":
                    this.pages[1] = 1
                    break;
                case "Traking":
                    this.pages[2] = 1
                    break;
                case "Setting":
                    this.pages[3] = 1
                    break;
            }
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
    border-bottom: var(--c-5) solid 5px;
}
</style>