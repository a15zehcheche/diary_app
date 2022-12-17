<template lang="">
    <div>
        <div class="closeBtn" @click="close">
            <img src="@/assets/icons8-cancel-64.png" width="40"  alt=""/>
        </div>
        <TheHeader :title="`Emoji`" />
       
        <div class="emoji-content">
            <div class="emoji-item" v-for="item in emoji" @click="selectEmoji(item.emoji)">{{ item.emoji }}</div>
        </div>
    </div>
</template>
<script>
import TheHeader from '../components/HeaderSecond.vue'

export default {
    components: {
        TheHeader
    },
    data() {
        return {
            emoji: this.$store.state.emoji
        }
    },
    mounted() {
        console.log(this.emoji);
        console.log("commin Page: " + this.$route.params.comminPage )
    },
    methods: {
        close(){
            this.$router.push(`/${this.$route.params.comminPage}`)
        },
        selectEmoji(emoji) {
            let data={
                name: this.$route.params.comminPage,
                emoji :emoji
            }
            this.$store.commit("setEmoji",data)
            this.$router.push(`/${this.$route.params.comminPage}`)
        }
    }
}
</script>
<style scoped>
.emoji-content {
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;

}
.emoji-item{
    font-size: 24px;
    padding: 5px;
    cursor: pointer;
    height: 50px;
    width: 50px;
}
</style>