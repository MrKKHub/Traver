<template>
 <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
    name:'Home',
    data(){
        return{
            swiperList:[],
            iconList:[],
            weekendList:[],
            recommendList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
            .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess(res){
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.weekendList = data.weekendList
                this.recommendList = data.recommendList
            }
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style lang="">
    
</style>