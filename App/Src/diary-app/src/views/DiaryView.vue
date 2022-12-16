<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import DiarySummary from '../components/DiarySummary.vue';
import { RouterLink } from 'vue-router'

</script>

<template lang="">
  <div class="page-body">
    <div class="title-box">
      <div class="week">{{week}}</div>
      <div class="date">{{todaydate}}</div>
    </div>
    <hr>
    <div class="box-content">
      <RouterLink to="/look">
        <DiarySummary :data="diary" v-for="(diary, index) in diarys" :key="index" @click="look(diary)"/>
      </RouterLink>
    </div>
    <div class="info">{{$store.state.diarys.length}}</div>
  </div>
  <RouterLink to="/create">
    <div class="footer">
     <img src="@/assets/icons8-add-new-80.png" width="50" alt="add">
    </div>
  </RouterLink>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    addDiary() {
      this.$store.commit("avtiveCreateMode")
    },
    look(diary) {
      this.$store.commit("avtiveLookMode", diary)
    }
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
    diarys() {
      return this.$store.state.diarys
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

.info {
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