<template>
  <div class="wike-home-page1 section">
    <div class="wiki-home-top">
      <SvgText/>
    </div>
    <div class="wiki-home-bottom">
    </div>
  </div>
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import SvgText from '../../components/svg/SvgText.vue'

  export default defineComponent({
    components: {
      SvgText
    },
    setup() {
      const renderPoint = () => {
        const container = document.querySelector('.wiki-home-bottom')
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
      }
      onMounted(() => {
        console.log('xxxxx')
        renderPoint()
      })
    }
  })

</script>

<style lang="scss">
.wike-home-page1 {
  .wiki-home-top {
    position: relative;
    height: 50%;
    background-color: #ce526f;
    z-index: 101;
  }
  .wiki-home-bottom {
    height: 50%;
    background-color: #000;
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