<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active
  transition: all 0.3s
.slide-enter,.slide-leave-to
  opacity: 0
</style>
