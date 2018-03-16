<template>
  <div class="pub-header-box">
    <div class="pub-header">
      <a class="page-back" @click="goBack"><i class="mintui mintui-back"></i></a>
      <div class="header-content">
        {{headerTitle}}
      </div>
      <a v-if="showKeepInfo" class="keep-info" @click="clickEvent">{{clickInfo}}</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    'headerTitle': {
      type: String,
      default: '不存在页面'
    },
    'back': {
      type: String,
      default: 'no'
    },
    'clickInfo': {
      type: String,
      default: '保存'
    },
    'showKeepInfo': {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      if (this.back === 'no') {
        this.$router.go(-1)
      } else {
        console.log(this.back)
        this.$router.push(this.back)
      }
    },
    clickEvent () {
      this.$emit('clickEvent')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .pub-header-box
    height: 44px
    .pub-header
      height: 44px
      background: #fff
      position: fixed
      width: 100%
      max-width: 640px
      top: 0
      z-index: 10;
      &:before
        line-scale()
        bottom: 0
        top: auto
      .page-back
        display: block
        top: 0
        left: 0
        position: absolute
        width: 44px
        height: 44px
        text-align: center
        display: flex
        justify-content: center
        align-items: center
      .header-content
        text-align: center
        line-height: 44px
        font-size: $font-size-medium
        letter-spacing: 1px
        font-weight: 400
        color: $color-highlight-background
      .keep-info
        position: absolute
        right: 10px
        top: 6px
        z-index: 100
        line-height: 30px
        padding: 0 5px
        font-size: $font-size-medium
        background: #f0f0f0
        border-radius: 5px
</style>
