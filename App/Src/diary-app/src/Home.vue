<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/Header.vue'
import NavBar from './components/NavBar.vue'

import CreateDiaryView from './views/CreateDiaryView.vue'
import LookView from './views/LookView.vue';
import DiaryView from './views/DiaryView.vue'
import CalendarView from './views/CalendarView.vue'
import TrakingView from './views/TrakingView.vue'
import SettingView from './views/SettingView.vue'

</script>

<template>
  <div class="app-body" v-bind:class="{ 'hidden': !$store.state.isActiveHomePage }">
    <header>
      <TheHeader />
      <NavBar />
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    </header>
    <div class="conten-body">
      <swiper :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }" 
        @slideChange="">
        <swiper-slide>
          <DiaryView />
        </swiper-slide>
        <swiper-slide>
          <CalendarView />
        </swiper-slide>
        <swiper-slide>
          <TrakingView />
        </swiper-slide>
        <swiper-slide>
          <SettingView />
        </swiper-slide>
      </swiper>
      <!-- <RouterView /> -->
    </div>
    <div class="info">Data will not be saved</div>
  </div>

  <CreateDiaryView v-if="$store.state.isActiveCreateMode" class="hidden"
    v-bind:class="{ 'show': $store.state.isActiveCreateMode }" />
  <LookView v-if="$store.state.isActiveLookMode" />

</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


export default {
  name: "App",



  components: {
    Swiper,
    SwiperSlide,
    DiaryView,
    CalendarView,
    TrakingView,
    SettingView,
  },
  data() {
    return {
      index: 0
    }
  },
  created() {
    if (window.cordova) {

      document.addEventListener(
        "deviceready",
        () => {
          console.log("cordova import success");
          /*window.sqlitePlugin.echoTest(function () {
            alert("Test de acceso a sqlite correcto");
          });*/

          let db = window.sqlitePlugin.openDatabase({
            name: this.$store.state.dbName,
            location: "default",
            androidDatabaseProvider: 'system'
          });
          this.$store.state.db = db
          // console.log(this.$store.state.sqliteDbManager.db)
          this.$store.commit("createDbManager", db)
          this.$store.commit("getDiarys")
        }, false
      );
    } else {
      console.log("cordova import error");
    }

  },
  mounted() {
    this.$store.state.swiper = document.querySelector('.swiper').swiper;
    let element = this;
    this.$store.state.swiper.on('slideChange', function (e) {
      element.$store.state.pageIndex = e.activeIndex
    });
  },
  methods: {

  },

};

</script>
<style scoped>
.app-body {
  height: 100vh;
}

.edit-active {
  display: block;
}

.info {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}

.conten-body {
  padding-top: 120px;
  height: 100vh;
}

.swiper {
  height: 100%;
}

header {
  line-height: 1.5;
  width: 100vw;
  position: fixed;
  z-index: 2;

}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
