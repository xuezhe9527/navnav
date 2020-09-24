<template>
  <div class="left-container">
    <!-- :default-active="$route.path" -->
    <el-menu
      :default-active="$route.path"
      class="elMenu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- @open="handleOpen"
      @close="handleClose"-->
      <!-- 静态 -->
      <!-- <el-submenu index="menu1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="menu1-1" class="item2">选项1-1</el-menu-item>
          <el-menu-item index="menu1-2" class="item2">选项1-2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="menu2-1" class="item2">选项2-1</el-menu-item>
          <el-menu-item index="menu2-2" class="item2">选项2-2</el-menu-item>
          <el-submenu index="menu2-3" title="选项2-3" class="item2">   
            <template slot="title">选项2-3</template>       
            <el-menu-item-group>
              <el-menu-item index="menu2-3-1" class="item2">选项2-3-1</el-menu-item>
              <el-menu-item index="menu2-3-2" class="item2">选项2-3-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu> -->

      <!-- <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三(没有展开项)</span>
      </el-menu-item> -->
      <el-submenu :index="item.index" v-for="item in treeList" :key="item.index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group >
          <div v-for="child in item.children" :key="child.index">
              <el-menu-item :index="child.index" class="item2" v-if="!child.children">{{child.name}}</el-menu-item>
              <el-submenu :index="child.index"  class="item2" v-else>   
                  <template slot="title">
                    <span>{{child.name}}</span>
                  </template>       
                  <el-menu-item-group>
                     <div v-for="grandson in child.children" :key="grandson.index">
                       <el-menu-item :index="grandson.index" class="item2" >{{child.name}}</el-menu-item>
                     </div>
                  </el-menu-item-group>
              </el-submenu>
          </div>     
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>
        
<script>
export default {
  name: "LeftNav",
  data(){
    return{
      treeList:[
        {
          index:'menu1',
          name:'导航一',
          children:[
            {
              index:'menu1-1',
              name:'选项1-1'
            },
            {
              index:'menu1-2',
              name:'选项1-2'
            }           
          ]
        },
        {
          index:'menu2',
          name:'导航二',
          children:[
            {
              index:'menu2-1',
              name:'选项2-1'
            },
            {
              index:'menu2-2',
              name:'选项2-2'
            },          
            {
              index:'menu2-3',
              name:'选项2-3',
              children:[
                {
                  index:'menu2-3-1',
                  name:'选项2-3-1'
                },
                {
                  index:'menu2-3-2',
                  name:'选项2-3-2'
                }   
              ]
            },          
          ]
        }
      ]
    }
  },
  // watch: {
  //   $route(newValue,oldValue){
  //     console.log('路由',newValue,oldValue)
  //     console.log("路径组合",newValue.matched);
  //   }
  // },
};
</script>
        
<style lang="less" >
.left-container {
  background-color: #bfa;
  height: 100%;
  .elMenu {
    width: 232px;
    height: 100%;
    padding-left: 0;
    .item2 {
      width: 232px;
      padding: 0;
      min-width: 150px;
      text-indent: 30px;
    }
  }
}
</style>