<template>
  <div class="apply-form" @touchmove.stop.prevent>
    <div class="popup">
      <div class="popup-title">报名信息</div>
      <div class="popup-form">
        <div class="inp">
          <input type="number" name="name" placeholder="请填写您的姓名">
        </div>
        <div class="inp">
          <input type="number" name="phone" placeholder="请填写您的手机号码">
        </div>
        <a class="sub">立即提交</a>
      </div>
      <a class="close">
        <i></i>
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .apply-form
    position: fixed
    z-index: 1001
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: rgba(0, 0, 0, .5)
    .popup
      position: fixed
      width: 80%
      padding: 20px 15px 10px
      top: 50%
      left: 50%
      background: #fff
      transform: translate(-50%, -50%)
      z-index: 9999
      border-radius: 5px
      .popup-title
        text-align: center
        font-size: $font-size-medium-x1
        color: #333
        padding-bottom: 15px
      .popup-form
        .inp
          border: 1px solid #eee
          border-radius: 3px
          padding: 9px 10px 11px
          font-size: 14px
          margin-bottom: 15px
          input
            background: 0 0
            border: none
            width: 100%
            display:block
        .sub
          display: block
          margin: 0 auto 20px
          text-align: center
          height: 40px
          line-height: 40px
          background-color: red
          color: #fff
          font-size: $font-size-medium-x1
          border-radius: 3px
      .close
        position: absolute
        top: -15px
        right: -15px
        width: 30px
        height: 30px
        background: url(./close.png) -2px 0 no-repeat
        background-size: auto 30px
</style>
