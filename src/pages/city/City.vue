<template>
    <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :list="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :list="cities" @handleChange="change"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/alphabet.vue'
export default {
    name:"City",
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:""
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json')
            .then(this.getCityInfoSuccess)
        },
        getCityInfoSuccess(res){
            // console.log(res)
             res = res.data
            if(res.ret&&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        change(letter){
           this.letter = letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>
    
</style>