export default [
    {
        
        path: '/frontDesk',
        component: () => import('@/views/frontDesk/index.vue'),
        children: [
            // 首页列表
            {
                path: 'index',
                meta: {
                    isShowRetBtn: false
                },
                component: () => import('@/views/frontDesk/articleList.vue'),
            },
            // 文章详情
            {
                path: 'detailPage',
                meta: {
                    isShowRetBtn: true
                },
                component: () => import('@/views/frontDesk/detailPage.vue'),
            }
        ]
    }
]