<template>
  <el-row class="rowContainer">
      <el-col :span="4" style="height: 100%;">
        <LeftNav style="height: 100%;"></LeftNav>
      </el-col>
      <el-col :span="20" class="right-col">
        <Header></Header>    
        <router-view style="height: 100%;"></router-view>     
      </el-col>
    </el-row>

</template>


<script>
 
import HelloWorld from "./components/HelloWorld.vue";
import LeftNav from "./components/LeftNav";
import Header from "./components/Header";
import RightContent from "./components/RightContent";

export default {
  name: "App",
  components: {
    HelloWorld,
    LeftNav,
    Header,
    RightContent,
  },
};
</script>

<style lang="less" >
.rowContainer{
  width: 100%;
  height: 100%;
  // background-color: greenyellow;
  .right-col{
    height: 100%; 
     overflow: scroll;
  }
}

</style>
