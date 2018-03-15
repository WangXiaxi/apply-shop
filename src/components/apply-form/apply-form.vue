<template>
  <div class="apply-form" @touchmove.stop.prevent>
    <div class="popup">
      <div class="popup-title">报名信息</div>
      <div class="popup-form">
        <div class="inp">
          <input type="text" name="name" v-model="name" placeholder="请填写您的姓名">
        </div>
        <div class="inp">
          <input type="text" name="phone" v-model="phone" placeholder="请填写您的手机号码">
        </div>
        <a class="sub" @click.stop="submitForm">立即提交</a>
      </div>
      <a class="close" @click="closeForm">
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { postApplyInfo } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
export default {
  components: {
  },
  props: {
    artID: {
      type: String
    }
  },
  data () {
    return {
      name: '',
      phone: ''
    }
  },
  methods: {
    closeForm () {
      this.$emit('closeForm')
    },
    submitForm () {
      this.loading.open({
        text: '正在提交...',
        spinnerType: 'triple-bounce'
      })
      postApplyInfo(this.name, this.phone, this.artID).then((res) => {
        if (res.code === ERR_OK) {
          setTimeout(() => {
            this.loading.close()
            this.toast({
              message: '操作成功',
              iconClass: 'icon icon-success'
            })
          }, 300)
        } else {
          setTimeout(() => {
            this.loading.close()
            this.toast({
              message: res.msg
            })
          }, 300)
        }
      })
    }
  },
  watch: {
    name (N) {
      console.log(N)
    },
    phone (N) {
      console.log(N)
    }
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
          font-size: 14px
          margin-bottom: 15px
          input
            background: 0 0
            border: none
            width: 100%
            padding: 9px 10px 11px
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
