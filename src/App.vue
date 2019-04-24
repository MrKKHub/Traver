<template>
  <div id="app">
    <!-- keep alive 表示路由的内容被加载一次以后 保存到内存中
    下次在渲染时就直接从内存中拿出来显示就可以 不需要重新渲染和执行钩子函数 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
