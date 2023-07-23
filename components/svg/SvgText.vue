<template>
  <div class="svgtext">
    <svg
        class="svg"
        viewBox="0 -50 125 83"
        version="1.1">
      <SvgRobbie/>
      <g
          view
          transform="translate(18,-280)">
        <text
            class="stext"
            xml:space="preserve"
            id="text6738"
            transform="rotate(-1.9982418)">
            <tspan
              class="tspan"
              sodipodi:role="line"
              id="tspan6736"
              x="-120.73165321"
              y="278.27707">
              You're awesome
              <animate attributeType="XML" attributeName="x" from="-100" :to="isMobile ? 0 : -6" begin="4.8s" dur="1s" fill="freeze"/>
            </tspan>

        </text>
        <path
            class="line line1"
            d="M 0,276 90,272 v 0"
            id="path6824"
            inkscape:connector-curvature="0" />
        <path
            class="line line2"
            inkscape:connector-curvature="0"
            id="path6826"
            d="M 0,277.5 92,273.5 v 0" />
        <path
            class="line line3"
            inkscape:connector-curvature="0"
            id="path6828"
            d="M 0,279.0 94,275 v 0" />
        <path
            class="line line4"
            d="M 0,280.5 96,276.5 v 0"
            id="path6830"
            inkscape:connector-curvature="0" />
      </g>
    </svg>
  </div>
</template>

<script>
import SvgRobbie from './SvgRobbie'

export default {
  name: 'svgtext',
  components: {
    SvgRobbie
  },
  asyncData({req}) {
    return {
      header: req
    }
  },
  data() {
    return {
      header: '123'
    }
  },
  computed: {
    isMobile() {
      let ua;
      if(process.server) {
        const req  = useRequestHeaders()
        ua = req['user-agent']
      } else {
        ua = window.navigator.userAgent;
      } 
      return /Android|webOS|iPhone|iPod|BlackBerry|symbianos|windows phone|mobile/i.test(ua)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes drawLine {
  to {

    opacity: 1;
    stroke-dasharray: 126;
  }
}
@keyframes drawLine4 {
  70% {
    opacity: 1;
    stroke-dasharray: 128;
  }
  100% {
    opacity: 0.6;
    stroke-dasharray: 116;
  }
}
.svgtext {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.svg {
  width: 750px;
  height: 100%;
  border-radius: 0;
  background: #ce526f;
}
.line {
  fill: none;
  stroke-linecap:round;
  stroke-opacity:1;
  stroke-dasharray: 0;
  stroke-dashoffset: 200;
  opacity: 0;
  animation: drawLine 2s linear forwards;
  &1 {
    stroke:#B5FFFC;
    stroke-width:0.8;
    animation-delay: 3s;
  }
  &2{
    stroke:#A4E887;
    stroke-width:0.8;
    animation-delay: 3.2s;
  }
  &3{
    stroke:#E8987E;
    stroke-width:0.8;
    animation-delay: 3.6s;
  }
  &4{
    stroke:#EA77FF;
    stroke-width:0.8;
    animation: drawLine4 2.4s linear forwards;
    animation-delay: 3.8s;
  }
}
.stext {
  font-style:normal;
  font-weight:normal;
  line-height:1.25;
  font-family:sans-serif;
  letter-spacing:0px;
  word-spacing:0px;
  fill-opacity:1;
  stroke-width:0.3;
  .tspan {
    font-size:5.8px;
    font-family:'MV Boli';
    fill: rgb(179, 210, 255);
    stroke:rgb(224, 183, 235);
    stroke-width:0.3;
  }
}
</style>
