import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // 不是异步操作 且不是批量操作 可以略过这一步 直接调mutations
    // actions:{
    //     // 接收到外面组件的函数
    //     changeCity(cxt,city){
    //         // console.log(city)
    //         // 通过ctx掉用mutations里的方法
    //         cxt.commit('changeCity',city)
    //     }
    // },
    mutations
    
})