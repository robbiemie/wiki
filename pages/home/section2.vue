<template>
  <div class="wiki-home-page2 section" :style="{
    opacity,
    display: isBirthday ? 'flex' : 'none'
  }">
  <div>
    <span>N</span>
    <span>I</span>
    <span>N</span>
    <span>I</span>
  </div>
  <cake/>
  <div style="marginTop: 40px;">
    <span class="animation" style="--i:1">H</span>
    <span class="animation" style="--i:2">A</span>
    <span class="animation" style="--i:3">P</span>
    <span class="animation" style="--i:4">P</span>
    <span class="animation" style="--i:5">Y</span>
  </div>
  <div>
    <span class="animation" style="--i:6">B</span>
    <span class="animation" style="--i:7">I</span>
    <span class="animation" style="--i:8">R</span>
    <span class="animation" style="--i:9">T</span>
    <span class="animation" style="--i:10">H</span>
    <span class="animation" style="--i:11">D</span>
    <span class="animation" style="--i:12">A</span>
    <span class="animation" style="--i:13">Y</span>
  </div>
  </div>
</template>

<script>
import {  ref, onMounted } from 'vue'
import {calculateScrollVisibility} from '../../common'
import cake from '../../components/cake'

export default {
  name: 'section2',
  components: {
    cake
  },
  setup() {
    
    const opacity =ref(0)
    const isBirthday = ref(false)

    const date = new Date();
    let month = date.getMonth() + 1
    let day = date.getDate()
    if(month === 6 && day === 25) {
      isBirthday.value = true
    }
    const handleScroll = () => {
      const scrollPercentage = calculateScrollVisibility('wiki-home-page2') || 0;
      opacity.value = scrollPercentage.toFixed(2)
      console.log('可视区域占比：', opacity);

    }
    document.addEventListener("scroll", handleScroll)
    onMounted(() => {
      handleScroll()
    })
    return {
      opacity,
      isBirthday
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;800&display=swap');


.wiki-home-page2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  .animation {
    animation: waviy 1s infinite;
    transform-style: preserve-3d;
    text-transform: uppercase;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 43.01, 1);
    transform-origin: 21.7578px 43.5px -12.65px;
    animation-delay: calc(.1s * var(--i));
  }
  i {
    margin: 10px;
    display: inline-block;
  }
  span {
    font-family: "Lilita One", cursive;
    position: relative;
    display: inline-block;
    color: #ecc4d1;
    text-transform: uppercase;
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 8px;
    &:nth-child(1) {
      color: rgb(249, 205, 200);
    }
    &:nth-child(2) {
      color: rgb(208, 240, 223);;
    }
    &:nth-child(3) {
      color:  rgb(205, 232, 243);;
    }
    &:nth-child(4) {
      color: rgb(252, 232, 197);;
    }
    &:nth-child(5) {
      color: rgb(249, 205, 200);
    }
    &:nth-child(6) {
      color: rgb(208, 240, 223);;
    }
    &:nth-child(7) {
      color:  rgb(205, 232, 243);;
    }
    &:nth-child(8) {
      color: rgb(252, 232, 197);;
    }
    &:nth-child(9) {
      color: rgb(249, 205, 200);
    }
    &:nth-child(10) {
      color: rgb(208, 240, 223);;
    }
    &:nth-child(11) {
      color:  rgb(205, 232, 243);;
    }
    &:nth-child(12) {
      color: rgb(252, 232, 197);;
    }
  }
  @keyframes waviy {
    0%,40%,100% {
      transform: translateY(0)
    }
    20% {
      transform: translateY(-20px)
    }
  }
}


</style>