<template>
    <div class="list" ref="warpper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-warpper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "CityList",
        props:{
            cities:Object,
            hot:Array,
            letter:String
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.warpper)
        },
        watch:{
            letter () {
                if(this.letter){
                    const  ele = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(ele)
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~styles/varibles.styl"
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.62rem
        bottom 0
        left 0
        right 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .6rem
            overflow hidden
            .button-warpper
                float left
                width 33.33%
                .button
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    padding .1rem 0
                    border-radius 0.06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
