<template>
  <div class="art-apply">
    <HeaderPub headerTitle="活动列表" clickInfo="商城" @clickEvent='clickEvent' :showKeepInfo=true></HeaderPub>
    <div class="list" v-infinite-scroll="loadMore"
                      infinite-scroll-disabled="hasMore"
                      infinite-scroll-distance="8">
      <ul>
        <li v-for="(item, index) in getApplyList" :key="index">
          <a @click="addUrl('detail', item.id)">
            <img v-if="item.image" src="item.image">
            <div class="cont-box">
              <p class="stit">{{item.title}}</p>
              <div class="lab-font">
                {{item.create_time}}
              </div>
              <div class="lab-font">
                {{item.description}}
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
import { getApplyList } from '@/api/api.js'
import { ERR_OK } from '@/api/config.js'
export default {
  components: {
    HeaderPub
  },
  data () {
    return {
      getApplyList: [],
      page: 1, // 底部上拉加载页数
      hasMore: true // 是否还需要上拉加载
    }
  },
  created () {
    this.loading.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    this._getAllData()
  },
  methods: {
    addUrl (urlText, itemId) {
      this.$router.push(`/${urlText}/${itemId}`)
    },
    _getAllData () {
      let _this = this
      let promise1 = new Promise((resolve, reject) => {
        getApplyList(this.page).then((res) => {
          if (res.code === ERR_OK) {
            _this.getApplyList = res.data
            resolve(res.data)
            this.hasMore = false
            this.page++
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
    loadMore () { // 数据上拉加载
      this.loading.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      })
      this.hasMore = true
      getApplyList(this.page).then((res) => {
        if (res.code === ERR_OK) {
          setTimeout(() => {
            this.getApplyList = this.getApplyList.concat(res.data)
            if (res.data.length === 0) {
              this.loading.close()
              this.instance = this.$toast('没有更多了')
            } else {
              setTimeout(() => { // 不加会自动检查再次调用
                this.hasMore = false
                this.loading.close()
              }, 300)
              this.page++
            }
          }, 500)
        }
      })
    },
    clickEvent () {
      window.location.href = 'https://www.ehanone.com/'
    }
  },
  beforeDestroy () {
    if (this.instance) {
      this.instance.close()
    }
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
        border: 1px solid #f2f2f2
        img
          width: 100%
          display: block
        .cont-box
          padding: 12px 6.5% 0
          padding-bottom: 7px
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
