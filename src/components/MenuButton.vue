<template>
  <button class="nav-toggle" :class="classStatus" v-on:click="handleClick()">
    <span class="bar-top"></span>
    <span class="bar-mid"></span>
    <span class="bar-bot"></span>
  </button>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'menu-button',
  data () {
    return {
      classStatus: {
        opened: false
      }
    }
  },
  methods: {
    ...mapActions(['toggleLeftSideBar']),
    handleClick () {
      this.toggleClass()
      this.toggleLeftSideBar()
    },
    toggleClass () {
      this.classStatus = {
        opened: !this.classStatus.opened
      }
    }
  }
}
</script>
<style>
.nav-toggle {
  position: relative;
  padding: 10px;
  background: transparent;
  border: 1px solid transparent;
  margin: 7px 0;
  top: 50%

  /*
   * FOR PRESENTATION ONLY
   * Centers everything, remove for
   * practical purposes.
  -webkit-transform(-50%, -50%);
          transform: translate(-50%, -50%);
  */
}

.nav-toggle:focus {
  outline-width: 0;
}

.nav-toggle [class*='bar-'] {
  background: #E8AD1A;
  display: block;
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
  -webkit-transition: .2s ease all;
          transition: .2s ease all;

  /*
   * ENLARGED FOR PRESENTATION
   * Keep these values at the same proportion
   * for it to look correct
  */
  border-radius: 4px;
  height: 4px;
  width: 50px;
  margin-bottom: 8px;

  /*
   * Practical values:
   * border-radius: 2px;
   * height: 2px;
   * width: 25px;
   * margin-bottom: 4px;
  */
}

.nav-toggle .bar-bot {
  margin-bottom: 0;
}

.opened .bar-top {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 15% 15%;
          transform-origin: 15% 15%;
}
.opened .bar-mid {
  opacity: 0;
}
.opened .bar-bot {
  -webkit-transform: rotate(45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 15% 95%;
          transform-origin: 15% 95%;
}
</style>
