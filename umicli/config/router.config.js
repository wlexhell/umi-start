export default [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {
                path: '/user', component: './User'
            }
        ]
    },
    //app
    {
        path: '/',
        component: '../layouts/UserLayout',
        routes: [
            {
                path: '/', redirect: './shop'
            },
            {
                path: '/shop', component: './Shop'
            },
        ]
    }
]