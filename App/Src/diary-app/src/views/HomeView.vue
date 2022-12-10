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
  <!-- <div class="footer">
    <img src="@/assets/icons8-add-new-80.png" width="40" alt="add">
  </div> -->
  <div class="box-content">
    <div class="diary-conten">
      <DiarySummary />
    </div>
  </div>
  <div class="info">51</div>
  
</template>
<script>
export default {

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

.footer {
  height: 60px;
  float: right;
  margin: 0 20px;
}
</style>