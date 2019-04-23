export default {
    changeCity(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) { }
    }
}
     // 在这里面修改store里的数据
