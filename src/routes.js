import Dashboard from './containers/dashboard'


const menu = [
    {
        'path': '/dashboard',
        'name': 'Dashboard',
        'icon': 'dashboard',
        'key': 'dashboard',
        'homepage': true,
        'component': Dashboard,
        'authority': [
            'admin',
            'user'
        ]
    }
]

export default menu;