<template>
<div class="header-top">
  <menu-button></menu-button>
</div>
</template>
<script>
import MenuButton from './MenuButton.vue'
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  components: {
    'menu-button': MenuButton
  }
}
</script>
