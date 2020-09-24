# mall-shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 基本要素
    1.vue + element-ui
    2.二三级导航，可以动态遍历,面包屑路径实现
    3.如果想实现用户权限实现，可以给不同的用户不同的菜单数据集合，然后动态获取

## 存在问题（待优化）
    面包屑是监视路由动态获取的，如果刷新，面包屑会消失，优化思路=> 可以监视的时候把数据存在vuex里面
   



