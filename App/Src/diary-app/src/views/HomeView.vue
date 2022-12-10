<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import DiarySummary from '../components/DiarySummary.vue';
</script>

<template lang="">
  <div class="title-box">
    <div class="week">Monday</div>
    <div class="date">05/12/2022</div>
  </div>
  <hr>
 
  <div class="box-content">
      <DiarySummary v-for="(item, index) in diarys" :key="index"/>
  </div>
  <div class="info">51</div>
  <div class="footer">
    <img src="@/assets/icons8-add-new-80.png" width="50" alt="add">
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      diarys: [1, 2, 5, 6, 7],
    };
  },
}
</script>
<style scoped>
.title-box {
  height: 60px;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 3vh;
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
  margin-bottom: 100px;
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