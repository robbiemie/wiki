<template>
  <div class="wiki-home-page2 section" :style="{
    opacity
  }">
  <div>
    <span style="--i:1">N</span>
    <span style="--i:2">I</span>
    <span style="--i:3">N</span>
    <span style="--i:4">I</span>
  </div>
  <div style="marginTop: 40px;">
    <span style="--i:1">L</span>
    <span style="--i:2">O</span>
    <span style="--i:3">V</span>
    <span style="--i:4">E</span>
    <span>&</span>
    <span style="--i:1">P</span>
    <span style="--i:2">E</span>
    <span style="--i:3">A</span>
    <span style="--i:4">C</span>
    <span style="--i:1">E</span>
  </div>
  </div>
</template>

<script>
import {  ref } from 'vue'

export default {
  name: 'section2',
  setup() {
    
    const opacity =ref(0)

    const calculateScrollVisibility = () => {
      const element = document.querySelector('.wiki-home-page2');
      if(!element) return
      const elementRect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (elementRect.bottom < 0 || elementRect.top > viewportHeight) {
        // 元素在视口上方或下方，不可见
        return 0;
      } else if (elementRect.top >= 0 && elementRect.bottom <= viewportHeight) {
        // 元素完全可见
        return 100;
      } else {
        // 计算可视区域占比
        const visibleHeight = Math.min(elementRect.bottom, viewportHeight) - Math.max(elementRect.top, 0);
        return (visibleHeight / elementRect.height);
      }
    }
    const handleScroll = () => {
      const scrollPercentage = calculateScrollVisibility() || 0;
      opacity.value = scrollPercentage.toFixed(2)
      console.log('可视区域占比：', opacity);

    }
    document.addEventListener("scroll", handleScroll)
    handleScroll()
    return {
      opacity
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

  span {
    font-family: "Lilita One", cursive;
    position: relative;
    display: inline-block;
    color: #ecc4d1;
    text-transform: uppercase;
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 8px;
    animation: waviy 1s infinite;
    animation-delay: calc(.1s * var(--i));
    transform-style: preserve-3d;
    text-transform: uppercase;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 43.01, 1);
    transform-origin: 21.7578px 43.5px -12.65px;
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