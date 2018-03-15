<template>
  <div class="art-apply-detail">
    <HeaderPub headerTitle="活动详情" back="/"></HeaderPub>
    <div v-if="getApplyDetail" class="content">
      <div class="article_header">
        <h1 class="title">{{getApplyDetail.title}}</h1>
        <div class="date">发布日期：{{getApplyDetail.time}}</div>
      </div>
      <article class="article_detail">
        {{getApplyDetail.content}}
      </article>
      <div class="apply-btn" @click="controlForm">立即报名</div>
      <transition name="slide">
        <applyForm v-if="formShow" :artID="$route.params.id" @closeForm="controlForm"></applyForm>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from '@/components/header/header-pub/header-pub'
import applyForm from '@/components/apply-form/apply-form'
import { getApplyDetail } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
export default {
  components: {
    HeaderPub,
    applyForm
  },
  data () {
    return {
      getApplyDetail: {},
      formShow: false
    }
  },
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    this._getAllData()
    console.log(this.$route.params)
  },
  methods: {
    _getAllData () {
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getApplyDetail(this.$route.params.id).then((res) => {
          console.log(res.data)
          if (res.code === ERR_OK) {
            _this.getApplyDetail = res.data
            resolve(res.data)
          }
        })
      })
      let promiseAll = Promise.all([promise1])
      promiseAll.then(() => {
        setTimeout(() => {
          this.loading.close()
        }, 400)
      })
    },
    controlForm () {
      this.formShow = !this.formShow
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  html,body
    background: #fff
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    opacity: 0
  .art-apply-detail
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
</style>
