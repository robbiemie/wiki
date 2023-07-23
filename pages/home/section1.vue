<template>
  <div class="wiki-home-page1 section" :style="{
    opacity
  }">
    <div class="wiki-home-top">
      <SvgText/>
    </div>
    <div class="wiki-home-bottom">
      <div class="wiki-home-stars"></div>
      <div class="ocean">
        <div  class="wave"/>
        <div  class="wave"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import SvgText from '../../components/svg/text'
  import {calculateScrollVisibility} from '../../common'

  export default defineComponent({
    components: {
      SvgText,
    },
    setup() {
      const opacity =ref(0)

      const handleScroll = () => {
        const scrollPercentage = calculateScrollVisibility('wiki-home-page1') || 0;
        opacity.value = scrollPercentage.toFixed(2)
      }
      document.addEventListener("scroll", handleScroll)
      const renderPoint = () => {
        const container = document.querySelector('.wiki-home-stars')
        function lines() {
          let sizeW = Math.random() * 12;
          let duration = Math.random() * 3;
          let e = document.createElement("div");
          e.setAttribute("class", "circle");
          container.appendChild(e);
          e.style.width = 2 + sizeW + "px";
          e.style.left = Math.random() * +innerWidth + "px";
          e.style.animationDuration = 2 + duration + "s";

          setTimeout(function () {
            container.removeChild(e);
          }, 5000);
        }
        setInterval(function () {
          lines();
        }, 200);
        return {
        }
      }
      onMounted(() => {
        renderPoint()
        handleScroll()
      })
      return {
        opacity
      }
    }
  })

</script>

<style lang="scss">
.wiki-home-page1 {
  position: relative;
  .wiki-home-top {
    position: relative;
    height: 50%;
    background-color: #ce526f;
    z-index: 101;
  }
  .wiki-home-bottom {
    position: relative;
    height: 50%;
    background-color: #182645;
    .wiki-home-stars {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .ocean { 
      height: 5%;
      width:100%;
      position:absolute;
      top:0;
      left:0;
      background: #182645;
      z-index: 102;
    }
    
    .wave {
      background: url(/img/wave.svg) repeat-x; 
      position: absolute;
      top: -120px;
      width: 6400px;
      height: 120px;
      animation: wave 4s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
    
    .wave:nth-of-type(2) {
      top: -95px;
      animation: wave 4s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 4s ease -1.25s infinite;
      opacity: 1;
    }
    
    @keyframes wave {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    }
    
    @keyframes swell {
      0%, 100% {
        transform: translate3d(0,-25px,0);
      }
      50% {
        transform: translate3d(0,5px,0);
      }
    }
  }
  .circle {
    position: absolute;
    bottom: 0;
    width: 20px;
    aspect-ratio: 1/1;
    background: #fca311;
    box-shadow: 0 0 10px #ff5400, 0 0 20px #ff5400, 0 0 30px #ff5400,
      0 0 50px #ff5400;
    border-radius: 50%;
    animation: animate 5s linear forwards;
    z-index: 100;
  }

  @keyframes animate {
    0% {
      transform: translatey(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translatey(-100vh);
      opacity: 1;
    }
  }

  .circle::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 25%;
    width: 50%;
    height: 100vh;
    opacity: 0.5s;
    background: linear-gradient(#ff5400, transparent);
  }
}

</style>