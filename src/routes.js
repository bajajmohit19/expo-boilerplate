import Dashboard from './containers/dashboard'
import Page2 from './containers/page2'


const menu = [
    {
        'title': 'Dashboard',
        'icon': 'dashboard',
        'key': 'dashboard',
        'homepage': true,
        'component': Dashboard,
        'authority': [
            'admin',
            'user'
        ]
    },
    {
        'title': 'Page 1',
        'icon': 'dashboard',
        'key': 'page1',
        // 'homepage': true,
        'component': Page2,
        'authority': [
            'admin',
            'user'
        ]
    }
]

export default menu;