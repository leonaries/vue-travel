<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
            return {
                showAbs:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll () {
                const top = document.documentElement.scrollTop
                if(top > 60){
                    this.showAbs = false
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = { opacity }
                }else {
                    this.showAbs = true
                }
            }
        },
        activated () {
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated () {
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
    @import "~styles/varibles.styl"
    .header-abs
        position absolute
        width .8rem
        height .8rem
        left .2rem
        top .2rem
        border-radius .4rem
        background rgba(0,0,0,0.8)
        text-align center
        line-height .8rem
        .header-back-icon
            color #fff
            font-size .4rem
    .header-fixed
        position fixed
        z-index 2
        left 0
        right 0
        top 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left  0
            width .64rem
            text-align center
            font-size .4rem
            color #ffffff
</style>
