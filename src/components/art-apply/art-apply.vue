<template>
  <div class="art-apply">
    <HeaderPub headerTitle="活动列表"></HeaderPub>
    <div class="list">
      <ul>
        <li>
          <a>
            <img src="http://www.bocweb.cn/upload/2017/02/07/14864634460214eg62u.jpg">
            <div class="cont-box">
              <p class="stit">标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试</p>
              <div class="lab-font">
                简介介绍去去去去去去群去去去去去去群无
              </div>
              <div class="bot-link">
                <span class="link-detail">Details</span>
                <span class="point"></span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <img src="http://www.bocweb.cn/upload/2017/02/07/14864634460214eg62u.jpg">
            <div class="cont-box">
              <p class="stit">标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试</p>
              <div class="lab-font">
                简介介绍去去去去去去群去去去去去去群无
              </div>
              <div class="bot-link">
                <span class="link-detail">Details</span>
                <span class="point"></span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <img src="http://www.bocweb.cn/upload/2017/02/07/14864634460214eg62u.jpg">
            <div class="cont-box">
              <p class="stit">标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试</p>
              <div class="lab-font">
                简介介绍去去去去去去群去去去去去去群无
              </div>
              <div class="bot-link">
                <span class="link-detail">Details</span>
                <span class="point"></span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>
            <img src="http://www.bocweb.cn/upload/2017/02/07/14864634460214eg62u.jpg">
            <div class="cont-box">
              <p class="stit">标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试</p>
              <div class="lab-font">
                简介介绍去去去去去去群去去去去去去群无
              </div>
              <div class="bot-link">
                <span class="link-detail">Details</span>
                <span class="point"></span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderPub from '@/components/header/header-pub/header-pub'
export default {
  components: {
    HeaderPub
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .art-apply
    .list
      padding: 12px
      li
        width: 100%
        background: #fff
        margin-bottom: 20px
        img
          width: 100%
          display: block
          border:  1px solid #f2f2f2
          border-bottom: none
        .cont-box
          padding: 12px 6.5% 0
          padding-bottom: 7px
          border: 1px solid #f2f2f2
          border-top: none
          .stit
            line-height: 28px
            margin-bottom: 8px
            font-size: $font-size-medium-x1
            position: relative
            color: #333
            no-wrap()
          .lab-font
            line-height: 24px
            font-size: $font-size-small
            min-height: 24px
            color: #777
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 3
            -webkit-box-orient: vertical
          .bot-link
            line-height: 36px
            display: block
            margin-top: 18px
            position: relative
            overflow: hidden
            &:before
              line-scale()
              bottom: auto
              top: 0
            .point
              float: right
              display: inline-block
              width: 24px
              height: 36px
              background: url(./ico_08.png) no-repeat center
            .link-detail
              float: left
              font-size: $font-size-medium-s
</style>
