<script setup>
import TheHeader from '../components/HeaderSecond.vue'

</script>
<template lang="">
    <div class="look-page">
        <div class="closeBtn">
            <img src="@/assets/icons8-cancel-64.png" width="40"  alt="" @click="closeLookMode"/>
        </div>
        <div class="editBtn" >        
            <img src="@/assets/icons8-edit-104.png" width="30" alt="4" @click="edit"/>
        </div>
        <div class="deleteBtn" >        
            <img src="@/assets/icons8-trash-can-96.png" width="35" alt="4" @click="deletes"/>
        </div>
        <TheHeader :title="`Paper`" />
        <div class="title-box">
            <div>
                <div class="week">{{week}}</div>
                <div class="date">{{todaydate}}</div>
            </div>
            <div>
                <div v-if="$store.state.emojiActive" class="emoji">{{diary.emoji}}</div>
                <div class="time">{{time}}</div>
            </div>
        </div>
        <hr>
        <div class="body">
            <div class="diary-title">{{diary.title}}</div>
            <div>{{diary.content}}</div>
        </div>
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            diary: this.$store.state.diarys[this.$store.state.lookDiaryIndex]
        }
    },
    created() {
        // console.log(this.$store.state.lookDiaryIndex)
    },
    methods: {
        edit(){},
        delete(){},
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "100px";
            element.style.height = element.scrollHeight + 100 + "px";
        },
        closeLookMode() {
            this.$store.commit("closeLookMode")
        }
    },
    computed: {
        week() {
            let dayNum = new Date(this.diary.time).getDay()
            return this.$store.state.week[dayNum][1]
        },
        todaydate() {
            let today = new Date(this.diary.time)
            return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        },
        time(){
            let today = new Date(this.diary.time)
            return `${today.getHours()}:${ today.getMinutes()}`
        }
    }
}
</script>
<style scoped>
.editBtn, .deleteBtn {
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
.editBtn{
    right: 60px;
    height: 60px;
    width: 60px;
}

.look-page {
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
.time{
    display: flex;
    align-items: flex-end;
    justify-content: end;
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

.body {
    margin: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.diary-title{
    font-size: var(--f-s-title);
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