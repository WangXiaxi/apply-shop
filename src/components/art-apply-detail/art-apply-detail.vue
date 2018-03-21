<template>
  <div class="art-apply-detail">
    <div ref="imgBox">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="@/common/image/banner2.jpg" width="100%" ref="imgSet"></mt-swipe-item>
        <mt-swipe-item><img src="@/common/image/banner1.jpg" width="100%"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <a href="https://www.ehanone.com">e兑商城</a>
      <router-link tag="a" to="/site/register_list">活动列表</router-link>
      <a href="javascript:location.reload()">刷新</a>
    </div>
    <div v-if="getApplyDetail" class="content">
      <div class="article_header">
        <h1 class="title">{{getApplyDetail.title}}</h1>
        <div class="date">发布日期：{{getApplyDetail.create_time}}</div>
      </div>
      <article class="article_detail" v-html="getApplyDetail.content">
      </article>
      <div class="apply-btn" @click="controlForm">立即报名</div>
      <div class="sign-info">
        <ul>
          <li>总报名人数<span>{{allPeoNum}}人</span></li>
          <li>特邀嘉宾<span>{{vipPeoNum}}人</span></li>
          <li>报名嘉宾<span>{{stuPeoNum}}人</span></li>
        </ul>
      </div>
      <transition name="slide">
        <applyForm v-if="formShow" :artID="$route.params.id" @closeForm="controlForm"></applyForm>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

import applyForm from '@/components/apply-form/apply-form'
import { getApplyDetail, registrationsSum } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
export default {
  components: {
    applyForm
  },
  computed: {
    formShow () {
      return this.$store.state.formShow
    }
  },
  data () {
    return {
      getApplyDetail: {},
      allPeoNum: 0,
      vipPeoNum: 0,
      stuPeoNum: 0
    }
  },
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    this._getAllData()
  },
  mounted () {
    this.$refs.imgSet.onload = () => {
      this.$refs.imgBox.style.height = `${this.$refs.imgSet.height}px`
    }
  },
  methods: {
    _getAllData () {
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getApplyDetail(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            _this.getApplyDetail = res.data
            document.title = _this.getApplyDetail.title
            resolve(res.data)
          }
        })
      })
      let promise2 = new Promise((resolve, reject) => {
        registrationsSum(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            this.allPeoNum = Number(res.data.guest) + Number(res.data.member)
            this.vipPeoNum = res.data.guest
            this.stuPeoNum = res.data.member
            resolve(res.data)
          }
        })
      })
      let promiseAll = Promise.all([promise1, promise2])
      promiseAll.then(() => {
        setTimeout(() => {
          this.loading.close()
        }, 400)
      })
    },
    controlForm () {
      this.$store.commit('SET_FORMSHOW', !this.$store.state.formShow)
    },
    clickEvent () {
      window.location.href = 'https://www.ehanone.com/'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  html,body
    background: #fff !important
    .article_detail
      img
          display: block
          max-width: 100%
          height: auto
          margin: 0 auto
        p
          margin: 3px 0
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    opacity: 0
  .art-apply-detail
    .nav
      display: flex
      height: 40px
      line-height: 40px
      background: #5C5C5C
      a
        flex: 1
        text-align: center
        color: #fff
        position: relative
        &:after
          content: ''
          height: 20px
          width: 1px
          transform: scaleX(0.5)
          background: rgba(255, 255, 255, .75)
          position: absolute
          top: 10px
          left: 0
        &:first-child:after
          display: none
    .content
      padding-bottom: 40px
      .article_header
        margin: 0 12px
        text-align: center
        padding: 15px 0 18px
        position: relative
        &:before
          line-scale()
          bottom: 0
          top: auto
        .title
          font-size: $font-size-medium-x2
          color: #333
          font-weight: 500
          line-height: 36px
        .date
          color: #999;
          margin-top: 8px
      .article_detail
        padding: 12px
        overflow: hidden
        word-wrap: break-word
        white-space: normal
        word-break: break-all
        line-height: 1.8
        margin: 12px 0
    .apply-btn
      width: 120px
      height: 40px
      background: red
      margin: 0 auto
      text-align:center
      line-height: 40px
      font-size: $font-size-medium-x1
      color: #fff
      border-radius: 5px
    .sign-info
      width: 100%
      position: relative
      margin-top: 20px
      &:before
        line-scale()
        width: calc(100% - 24px)
        left: 12px
        bottom: auto
        top: 0
      ul
        margin 0 12px
        li
          line-height: 50px
          height: 50px
          position: relative
          padding: 0 10px
          &:before
            line-scale()
            bottom: 0
            top: auto
          span
            float: right
</style>
