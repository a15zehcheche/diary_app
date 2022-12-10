<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import DiarySummary from '../components/DiarySummary.vue';
</script>

<template lang="">
  
  <div class="title-box">
    <div class="week">{{week}}</div>
    <div class="date">{{todaydate}}</div>
  </div>
  <hr>
 
  <div class="box-content">
      <DiarySummary :data="item" v-for="(item, index) in $store.state.diarys" :key="index"/>
  </div>
  <div class="info">51</div>
  <div class="footer" @click="addDiary">
    <img src="@/assets/icons8-add-new-80.png" width="50" alt="add">
  </div>
 
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    addDiary(){
      this.$store.commit("avtiveEditMode")
    }
  },
  computed:{
    week(){
      let dayNum = this.$store.state.toDay.getDay()
      return this.$store.state.week[dayNum][1]
    },
    todaydate(){
      let today = this.$store.state.toDay
      return `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` 
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

.week {
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: var(--f-s-title);
}

.date {
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: var(--f-s-title);
}

.box-content {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
}
.info{
  margin: 50px 0;
}
.footer {
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 0;
  right: 0;
  margin: 20px 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
}

</style>