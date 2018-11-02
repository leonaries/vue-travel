<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            swiperList:Array
        },
        data () {
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',//轮播圆点
                    loop:true //轮播可以循环
                }
            }
        },
        computed:{
            showSwiper () {
                return this.swiperList.length
            }
        }
    }
</script>

<style scoped  lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow :hidden
        width: 100%
        height: 0
        padding-bottom: 31.65%
        .swiper-img
            width:100%
</style>
