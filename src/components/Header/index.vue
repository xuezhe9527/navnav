<template>
    <!-- bug：刷新后页面路径可能会消失，因为获取路径的逻辑是在路由上获取。解决：可以在监视的时候存在vuex里面这样就不会刷新消失了 -->
  <div class="header-container">Header组件
      <div>当前所在位置:</div> 
      
      <!-- <router-link :to="pp.meta.lastPath" v-for="(pp,path) in currentPath" :key="path">{{pp.meta.chinesePath}} / </router-link> 会报错  -->
      <!-- <router-link :to="pp.path" v-for="(pp,path) in currentPath" :key="path">{{pp.meta.lastPath}} / </router-link>  -->
      <!-- <span>
        <router-link :to="pp.path" v-for="(pp,path) in currentPath" :key="path"> / {{pp.meta.chinesePath}} </router-link>
      </span> -->
      <span v-for="(pp) in currentPath" :key="pp.path" >
        <!-- <router-link :to="pp.path" > / {{pp.meta.chinesePath}} </router-link> -->
        <!-- <router-link :to="pp.meta.lastPath? pp.meta.lastPath:'/menu2-1'" > / {{pp.meta.chinesePath}} </router-link> -->
        <router-link :to="pp.meta.lastPath? pp.meta.lastPath:currentPath[0].meta.lastPath" > / {{pp.meta.chinesePath}} </router-link>
      </span>
  </div>
</template>
        
<script>
export default {
  name: "Header",
  data(){
      return{
          currentPath:null
      }
  },
  computed: {
      mmmm(){
          
      }
  },
  watch: {
    $route(newValue, oldValue) {
      console.log("路由", newValue, oldValue);
    //   console.log("路径组合", newValue.matched);
    //   console.log("路径path", newValue.matched[1].meta.lastPath);
      this.currentPath = newValue.matched
    },
  },
};
</script>
        
<style lang="less" scoped>
.header-container {
  background-color: tomato;
}
</style>