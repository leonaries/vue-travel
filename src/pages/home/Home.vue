<template>
    <div>
        <home-header :city="city"></home-header>
        <HomeSwiper :swiperList="swiperList"></HomeSwiper>
        <HomeIcons :iconList="iconList"></HomeIcons>
        <HomeRecommend :recommendList="recommendList"></HomeRecommend>
        <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from  'axios'
    import { mapState } from  'vuex'
    export default {
        name: "home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        computed:{
            ...mapState(['city'])
        },
        data () {
            return {
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        methods:{
            getHomeInfo () {
                axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data
                if(res.ret &&res.data){
                    const data = res.data;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList
                }
            }
        },
        mounted () {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        activated (){
            if(this.lastCity !== this.city){
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    }
</script>

<style scoped>

</style>
