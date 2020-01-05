import Dashboard from './containers/dashboard'
import Page2 from './containers/page2'
import Push from './containers/push'


const menu = [
    {
        'title': 'Dashboard',
        'icon': 'dashboard',
        'key': 'dashboard',
        // 'homepage': true,
        'component': Dashboard,
        'authority': [
            'admin',
            'user'
        ]
    },
    {
        'title': 'Page',
        'icon': 'file-o',
        'key': 'page',
        // 'component': Page2,
        'authority': [
            'admin',
            'user'
        ],
        'children': [
            {
                'title': 'Add Branch',
                'homepage': true,
                'key': 'add',
                'component': Page2
            },
            {
                'title': 'Edit Branch',
                'key': 'edit',
                'component': Page2,
                // 'dontShowOnMenu': true
            }
        ]
    },
    {
        'title': 'Push',
        'icon': 'push',
        'key': 'push',
        // 'homepage': true,
        'component': Push,
        'authority': [
            'admin',
            'user'
        ]
    }
]

export default menu;