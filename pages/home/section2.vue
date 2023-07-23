<template>
  <div class="wiki-home-page2 section" :style="{
    opacity
  }">
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
.wiki-home-page2 {
  background-color: #182645;
}
</style>