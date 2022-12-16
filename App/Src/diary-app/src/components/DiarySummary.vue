<template lang="">
    <div>
        <div class="time">{{time}}</div>
        <div class="box">
            <div class="header">
                <div class="title">{{data.diary_title}}</div>
                <div v-if="$store.state.emojiActive" class="emoji">{{data.emoji}}</div>
            </div>
            <div class="content">
                <p>
                    {{data.diary_content}}
                </p>
            </div> 
        </div>
    </div>
   
</template>
<script>
export default {
    props: {
        data: Object,
    },
    mounted() {
        // console.log(this.data)
    },
    computed:{
        time(){
            let hour = new Date(this.data.create_date).getHours()
            let minu = new Date(this.data.create_date).getMinutes()
            return `${String(hour).padStart(2, '0')}:${String(minu).padStart(2, '0')}`
        }
    }
}
</script>
<style scoped>
.time {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.box {
    height: 180px;
    max-width: 100%;
    width: 330px;
    margin: 20px 10px;
    margin-top: 0px;
    padding: 20px;
    border: 2px solid var(--c-5);
    background-color: var(--c-1);
    display: inline-block;
    box-sizing: border-box;
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
</style>