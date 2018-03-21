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
        <mt-radio
          title="学员类型"
          v-model="vip_tipe"
          :options="[{label:'报名嘉宾', value: '1'},  {label:'特邀嘉宾', value: '0'}]">
        </mt-radio>
        <div class="inp" style="margin-top: 10px">
          <select name="province" v-model="province">
            <option value="-1" selected="true">请选择省份</option>
            <option v-for="(item, index) in provinceGet" :value="item.area_id" :key="index">{{item.area_name}}</option>
          </select>
        </div>
        <div class="inp">
          <input type="text" name="sfzID" v-model="sfzID" placeholder="请填写有效的身份证号">
        </div>
        <a class="sub" @click.stop="submitForm">立即提交</a>
      </div>
      <a class="close" @click="closeForm">
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { postApplyInfo, getProvince } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
import IdentityCodeValid from '@/common/js/IdentityCodeValid'
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
      phone: '',
      province: '-1',
      vip_tipe: '1',
      showPro: false,
      sfzID: '',
      provinceGet: []
    }
  },
  created () {
    this._getAllData()
  },
  methods: {
    _getAllData () {
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getProvince(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            _this.provinceGet = res.data
            resolve(res.data)
          }
        })
      })
      let promiseAll = Promise.all([promise1])
      promiseAll.then(() => {
      })
    },
    closeForm () {
      this.$emit('closeForm')
    },
    submitForm () {
      if (!this.name) {
        this.$toast({
          message: '姓名不能为空'
        })
        return false
      }
      let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
      if (!phoneReg.test(this.phone)) {
        this.$toast({
          message: '手机号码格式不正确'
        })
        return false
      }
      if (Number(this.province) === -1) {
        this.$toast({
          message: '请选择省份'
        })
        return false
      }
      let idText = IdentityCodeValid(this.sfzID)
      if (idText) {
        this.$toast({
          message: idText
        })
        return false
      }
      this.loading.open({
        text: '正在提交...',
        spinnerType: 'triple-bounce'
      })
      postApplyInfo(this.name, this.phone, this.artID, this.province, this.vip_tipe, this.sfzID).then((res) => {
        if (res.code === ERR_OK) {
          setTimeout(() => {
            this.$store.commit('SET_FORMSHOW', !this.$store.state.formShow)
            this.loading.close()
            this.$toast({
              message: '操作成功'
            })
          }, 300)
        } else {
          setTimeout(() => {
            this.loading.close()
            this.$toast({
              message: res.msg
            })
          }, 300)
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .apply-form
    .mint-cell
      display: inline-block
    .mint-cell:last-child
      background: none
    .mint-cell-wrapper
      background: none
      padding: 0
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .apply-form
    position: fixed
    z-index: 11
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
          input, select
            background: 0 0
            border: none
            width: 100%
            padding: 9px 10px 11px
            display:block
          select
            padding: 8px 10px 9px
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
