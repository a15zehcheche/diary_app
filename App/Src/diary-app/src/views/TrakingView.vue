<template lang="">
    <div class="page-body">
        <div class="title-box">
            <div class="date">{{'09/2022'}}</div>
            <div class="searchIcon">icon</div>
        </div>
        <hr>
        <RouterLink to="/look">
            <DiaryItem :diary="diary" v-for="(diary, index) in diarys" :key="index" @click="look(diary)"></DiaryItem>
        </RouterLink>
    </div>
</template>
<script>
import DiaryItem from "../components/TrakingDiaryItme.vue";
export default {
    components: {
        DiaryItem
    },
    methods: {
        look(diary) {
            this.$store.commit("avtiveLookMode", diary)
        }
    },
    computed: {
        diarys() {
            return this.$store.state.diarys
        }
    }
}
</script>
<style scoped>
.title-box {
    height: 60px;
    display: grid;
    grid-template-columns: auto auto;
    margin: 0 5vw;
}

hr {
    margin-bottom: 10px;

}

.searchIcon {
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    font-size: var(--f-s-title);
    justify-content: end;
}

.date {
    display: flex;
    align-items: flex-end;
    font-size: var(--f-s-title);
}
</style>