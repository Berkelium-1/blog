import Main from '@/views/Main';
import Home from '@/views/main/Home';
const routes = [
    //
    {
        path: '/',
        redirect: { name: 'Main' }
    },
    // 主界面
    {
        path: '/Main',
        name: 'Main',
        component: Main,
        redirect: { name: 'Home' },
        children: [
            // 首页
            { path: 'Home', name: 'Home', component: Home, title: '首页' },
            // 
            { path: 'a', name: 'a', component: Home, title: 'sss' },

        ]
    }
]

export default routes;