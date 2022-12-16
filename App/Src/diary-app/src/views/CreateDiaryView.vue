<script setup>
import TheHeader from '../components/HeaderSecond.vue'

</script>
<template lang="">
    <div class="edit-page">
        <RouterLink to="/">
            <div class="closeBtn">
                <img src="@/assets/icons8-cancel-64.png" width="40"  alt=""/>
            </div>
        </RouterLink>
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
                <RouterLink to="/emoji/create" class="emoji">
                    {{diary.emoji}}
                </RouterLink>
                <div class="time">{{time}}</div>
            </div>
        </div>
        <hr>
        <div class="body">
            <input type="text" placeholder="Title..." v-model="diary.diary_title">
            <textarea placeholder="Write something..." @input="resize()" ref="textarea" v-model="diary.diary_content"></textarea>
        </div>
        
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    created() {
        this.$store.commit("refreshDate")
        this.diary.create_date = this.$store.state.nowDate.getTime()
        console.log(this.diary)
    },
    updated() {
        let element = this.$refs["textarea"];
        element.style.height = "100px";
        element.style.height = element.scrollHeight + 100 + "px";
    },
    methods: {
        save() {
            console.log("save")
            this.$store.commit("saveDiary", this.diary)
            //this.$store.commit("getDiarys")
            this.$router.push("/")
        },
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "100px";
            element.style.height = element.scrollHeight + 100 + "px";
        },
    },
    computed: {
        week() {
            let dayNum = this.$store.state.nowDate.getDay()
            return this.$store.state.week[dayNum][1]
        },
        todaydate() {
            let today = this.$store.state.nowDate
            return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        },
        time() {
            let today = this.$store.state.nowDate 
            return `${ String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`
        },
        diary() { return this.$store.state.diary }
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