<template>
  <div class="art-apply-detail">
    <HeaderPub headerTitle="活动列表" back="/"></HeaderPub>
    <div class="content">
      <div class="article_header">
        <h1 class="title">杭州东方文化园旅业集团介绍</h1>
        <div class="date">发布日期：2017-08-02 11:11:59</div>
      </div>
      <article class="article_detail">
      </article>
      <div class="apply-btn">立即报名</div>
      <applyForm></applyForm>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from '@/components/header/header-pub/header-pub'
import applyForm from '@/components/apply-form/apply-form'
export default {
  components: {
    HeaderPub,
    applyForm
  },
  methods: {
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
