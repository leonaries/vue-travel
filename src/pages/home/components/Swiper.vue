<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
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
        data () {
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1802/73/d1ba8edc561d1f02.jpg_750x200_1ae7b013.jpg'
                    },
                    {
                        id:'0002',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
                    },
                    {
                        id:'0003',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/d4/5552d5973b78f202.jpg_750x200_17a8332c.jpg'
                    },
                ]
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
        padding-bottom: 31.25%
        .swiper-img
            width:100%
</style>
