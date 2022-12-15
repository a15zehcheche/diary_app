<template>
    <div class="nav">
        <div v-bind:class="{ active: index == 0 }" @click="mySlideTo(0)">page0</div>
        <div v-bind:class="{ active: index == 1 }"  @click="mySlideTo(1)">page1</div>
        <div v-bind:class="{ active: index == 2 }" @click="mySlideTo(2)">page2</div>
    </div>
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation controller
        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
    </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/controller';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiper: "",
            index: 0
        }
    },
    mounted() {
        this.swiper = document.querySelector('.swiper').swiper;
        let element = this;
        this.swiper.on('slideChange', function (e) {
            element.index = e.activeIndex
        });

    },
    methods: {
        mySlideTo(index) {
            console.log(this.index)
            this.swiper.slideTo(index)
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            swiper = swiper
            console.log(swiper);
        };
        const onSlideChange = (e) => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Controller],
        };
    },
};
</script>

<style scoped>
.swiper {
    height: 100vh;
}
.active{
    border-bottom: 2px solid black;
}
.nav {
    display: flex;
}
</style>