<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
                <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recommendList" :key="item.id">
                    <img class="item-img" :src="item.imgUrl">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommendList:Array
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~styles/mixins.styl"
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background  #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width:1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            min-width 0
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis ()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis ()
            .item-button
                background #ff9300
                line-height .44rem
                margin-top: .16rem
                padding 0  .2rem
                border-radius 0.06rem
                color #fff
</style>
