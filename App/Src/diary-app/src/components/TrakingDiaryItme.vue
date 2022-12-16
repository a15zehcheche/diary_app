<template lang="">
    <div class="item">
        <div class="date-box">
            <div class="date">
                <div class="time-box">
                    <div class="time">{{time}}</div>
                    {{diaryDate}}
                </div>
                <div class="week">su</div>
            </div>
            <div class="my-hr"></div>
            <img src="@/assets/sort-down.png" width="20"  alt=""/>
        </div>
        <div class="diary-box">
            <div class="box">
                <div class="header">
                    <div class="title">{{diary.diary_title}}</div>
                    <div v-if="$store.state.emojiActive" class="emoji">{{diary.emoji}}</div>
                </div>
                <div class="content">
                    <p>
                        {{diary.diary_content}}
                    </p>
                </div> 
               
                <div class="my-hr2" :style="{'width':`${boxWidth}px`}"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            diary: this.$store.state.diarys[0],
            boxWidth:100
        }
    },
    mounted(){
        this.boxWidth = document.querySelector('.diary-box').querySelector(".box").offsetWidth - 50;
    },
    computed:{

        time(){
            let hour = new Date(this.diary.create_date).getHours()
            let minu = new Date(this.diary.create_date).getMinutes()
            return `${String(hour).padStart(2, '0')}:${String(minu).padStart(2, '0')}`
        },
        diaryDate(){
            let date = new Date(this.diary.create_date)
            let day = date.getDay()
            let month = date.getMonth()
            let year = date.getFullYear()
            return `${day}/${month+1}/${year}`

        }
    }
}
</script>
<style scoped>
.item {
    height: 150px;
    width: 100vw;
}

.date-box {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: top left;
    transform: translatey(150px) rotate(-90deg);
    position: absolute;

}

.date {
    width: 150px;
    display: flex;
    justify-content: center;
}

.week {
    transform-origin: center;
    transform: rotate(90deg);
    font-weight: 500;
    margin-left: 10px;
    font-size: var(--f-s-title);
}

.my-hr {
    width: 150px;
    border-bottom: var(--c-5) 3px solid;
}


.diary-box{
    padding-left: 70px;
    height: 100%;
}


.time {
    display: flex;
    justify-content: center;
}

.box {
    height: 150px;
    max-width: 100%;
    width: 100%;
    margin-top: 0px;
    padding: 20px;
    overflow: hidden;
}

.header {
    display: flex;
    justify-content: space-between;
    font-size: var(--f-s-title);
}

.header>.title {
    font-weight: 500;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.header>.emoji {
    width: 40px
}

.content {
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: break-word;
}
.my-hr2{
    position: absolute;
    bottom: 10px;
    border-bottom: 2px solid var(--c-3);
}
</style>