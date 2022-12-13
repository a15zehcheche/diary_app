<script setup>
import TheHeader from '../components/HeaderSecond.vue'

</script>
<template lang="">
    <div class="edit-page">
        <div class="closeBtn">
            <img src="@/assets/icons8-cancel-64.png" width="40"  alt="" @click="closeEditMode"/>
        </div>
        <div class="saveBtn" >        
            <img src="@/assets/icons8-save-96.png" width="35" alt="4" @click="save"/>
        </div>
        <TheHeader :title="`Edit`" />
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
            <input type="text" placeholder="Title..." v-model="diary_copy.diary_title">
            <textarea placeholder="Write something..." @input="resize()" ref="textarea" v-model="diary_copy.diary_content"></textarea>
        </div>
        
    </div>
</template>
<script>

export default {
    props: {
        diary: Object
    },
    data() {
        return {
            diary_copy: Object.assign({}, this.diary)
        }
    },
    mounted() {
        let element = this.$refs["textarea"];
        element.style.height = "100px";
        element.style.height = element.scrollHeight + 100 + "px";

    },

    methods: {
        closeEditMode() {
            this.$store.commit("closeEditMode")
        },
        save() {
            console.log("Update diary_copy")
            this.$store.commit("updateDiary", this.diary_copy)
            this.$store.commit("avtiveLookMode", this.diary_copy)
            this.$store.commit("getDiarys")
            console.log(this.$store.state.diarys)
            this.$store.commit("closeEditMode")
        },
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "100px";
            element.style.height = element.scrollHeight + 100 + "px";
        },

    },
    computed: {
        week() {
            let dayNum = new Date(this.diary_copy.create_date).getDay()
            return this.$store.state.week[dayNum][1]
        },
        todaydate() {
            let today = new Date(this.diary_copy.create_date)
            return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        },
        time() {
            let today = new Date(this.diary_copy.create_date)
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

.time {
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