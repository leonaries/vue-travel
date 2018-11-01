<template>
    <div>
        <home-header></home-header>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommend></HomeRecommend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    export default {
        name: "home",
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend
        }
    }
</script>

<style scoped>

</style>
