
import menu11 from '@/pages/menu1/menu1-1.vue'
import menu12 from '@/pages/menu1/menu1-2.vue'
import Menu22 from '@/pages/menu2/menu2-2.vue'
import Menu21 from '@/pages/menu2/menu2-1.vue'
import Menu231 from '@/pages/menu2/menu2-3-1.vue'
import Menu232 from '@/pages/menu2/menu2-3-2.vue'


import EmptyPage from '@/pages/EmptyPage'

export default [
    {
        path:'/menu1',
        component:EmptyPage,
        name:"menu1",
        meta:{
            chinesePath:'导航一',
            lastPath:'/menu1-1'
        },
        children:[
            {
                path:'/menu1-1',
                component:menu11,
                name:"menu11",
                meta:{
                    chinesePath:'选项1-1'
                },
            },
            {
                path:'/menu1-2',
                component:menu12,
                name:"menu12",
                meta:{
                    chinesePath:'选项1-2'
                },
            }
        ]
    },
    {
        path:'/menu2',
        component:EmptyPage,
        name:"EmptyPage",    
        meta:{
            chinesePath:'导航二',
            lastPath:'/menu2-1'
        },
        children:[
            {
                path:'/menu2-1',
                component:Menu21,
                name:"menu21",
                meta:{
                    chinesePath:'选项2-1',                    
                },
            },
            {
                path:'/menu2-2',
                component:Menu22,
                name:"menu22",
                meta:{
                    chinesePath:'选项2-2',                    
                },
            },
            {
                path:'/menu2-3',
                component:EmptyPage,
                name:"menu23",
                meta:{
                    chinesePath:'选项2-3',
                    lastPath:'/menu2-3-1'
                },
                children:[
                    {
                        path:'/menu2-3-1',
                        component:Menu231,
                        name:"menu231",
                        meta:{
                            chinesePath:'选项2-3-1',
                            // lastPath:'/menu2-3-1'
                        },
                    },
                    {
                        path:'/menu2-3-2',
                        component:Menu232,
                        name:"menu232",
                        meta:{
                            chinesePath:'选项2-3-2',
                            // lastPath:'/menu2-3-1'
                        },
                    }
                ]
            },
            
        ]
    },
    
]