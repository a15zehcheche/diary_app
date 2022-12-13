<script setup>
import TheHeader from '../components/HeaderSecond.vue'

</script>
<template lang="">
    <div class="edit-page">
        <div class="closeBtn">
            <img src="@/assets/icons8-cancel-64.png" width="40"  alt="" @click="closeCreateMode"/>
        </div>
        <div class="saveBtn" >        
            <img src="@/assets/icons8-save-96.png" width="35" alt="4" @click="save"/>
        </div>
        <TheHeader :title="`Paper`" />
        <div class="title-box">
            <div>
                <div class="week">{{week}}</div>
                <div class="date">{{todaydate}}</div>
            </div>
            <div>
                <div v-if="$store.state.emojiActive" class="emoji">emoji</div>
                <div class="time">{{time}}</div>
            </div>
        </div>
        <hr>
        <div class="body">
            <input type="text" placeholder="Title..." v-model="diary.title">
            <textarea placeholder="Write something..." @input="resize()" ref="textarea" v-model="diary.content"></textarea>
        </div>
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            diary: {
                time: "",
                title: "",
                content: "",
                emoji: "😀",
            }

        }
    },
    created(){
        this.$store.commit("refreshDate")
        this.diary.time = this.$store.state.nowDate.getTime()
        console.log( this.diary)
    },
    updated() {
        let element = this.$refs["textarea"];
        element.style.height = "100px";
        element.style.height = element.scrollHeight + 100 + "px";
    },
    methods: {
        closeCreateMode(){
            this.$store.commit("closeCreateMode")
        },
        save() {
            console.log("save")
            this.$store.commit("saveDiary", this.diary)
            this.$store.commit("getDiarys")
            this.$store.commit("closeCreateMode")
            this.diary = {
                time:"",
                title: "",
                content: "",
                emoji: "",
            }
        },
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "100px";
            element.style.height = element.scrollHeight + 100 + "px";
        },
    },
    computed: {
        week() {
            let dayNum =this.$store.state.nowDate.getDay()
            return this.$store.state.week[dayNum][1]
        },
        todaydate() {
            let today = this.$store.state.nowDate
            return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        },
        time(){
            let today = this.$store.state.nowDate
            return `${today.getHours()}:${today.getMinutes()}`
        }
    }
}
</script>
<style scoped>

.saveBtn {
    position: absolute;
    height: 60px;
    width: 60px;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit-page {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: white;
}

.title-box {
    /* height: 60px; */
    display: grid;
    grid-template-columns: auto auto;
    margin: 0 5vw;
    margin-top: 10px;
}

.week {
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    font-size: var(--f-s-20);
}

.date {
    font-size: var(--f-s-title);
}

.emoji {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    font-size: var(--f-s-title);
}
.time{
    display: flex;
    align-items: flex-end;
    justify-content: end;
}

.body {
    margin: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.body * {
    margin-top: 10px;
}

input[type="text"] {
    white-space: wrap;
    font-size: var(--f-s-sub-title);
}

textarea {
    min-height: 100px;
    padding: 0;
    resize: none;
    font-size: var(--f-s-sub-title);
}
</style>