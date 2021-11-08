export default [
    {
        
        path: '/frontDesk',
        component: () => import('@/views/frontDesk/index.vue'),
        children: [
            // 首页列表
            {
                path: 'index',
                component: () => import('@/views/frontDesk/articleList.vue'),
            },
            // 文章详情
            {
                path: 'detailPage',
                component: () => import('@/views/frontDesk/detailPage.vue'),
            }
        ]
    }
]