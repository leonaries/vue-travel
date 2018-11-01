<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                   <img class="item-img" :src="item.imgUrl">
                   <div class="item-info">
                       <p class="item-title">{{item.title}}</p>
                       <p class="item-desc">{{item.desc}}</p>
                       <button class="item-button">查看详情</button>
                   </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data () {
            return {
                recommendList :[
                    {
                        id:'0001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
                        title:'成都欢乐谷',
                        desc:'超级旋转过山车刺激到让你怀疑人生超级旋转过山车刺激到让你怀疑人生'
                    },
                    {
                        id:'0002',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
                        title:'成都欢乐谷',
                        desc:'超级旋转过山车刺激到让你怀疑人生超级旋转过山车刺激到让你怀疑人生'
                    },
                    {
                        id:'0003',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
                        title:'成都欢乐谷',
                        desc:'超级旋转过山车刺激到让你怀疑人生超级旋转过山车刺激到让你怀疑人生'
                    },
                    {
                        id:'0004',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
                        title:'成都欢乐谷',
                        desc:'超级旋转过山车刺激到让你怀疑人生超级旋转过山车刺激到让你怀疑人生'
                    },
                ]
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
