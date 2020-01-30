import axios from 'axios'

import store from './store'
// import { apiUrl } from './settings'

// export const API_URL = apiUrl

// let authAxios = axios.create({
//     baseURL: apiUrl
// })

let authAxios = axios.create({
    baseURL: 'http://192.168.0.107:3000'
})

// let getToken = () => {
//     return ({ 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
// }

class Request {

    error = (err) => {
        try {
            if (err.response.status === 401) {
                localStorage.clear()
            }
        } catch (e) {
        }
    }

    login(data) {
        return new Promise((next, error) => {
            authAxios.post('/login', data)
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }
    
    verifyToken(data) {
        return new Promise((next, error) => {
            authAxios.post('/verifyToken', data)
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    upload(id, data) {
        return new Promise((next, error) => {
            const { global } = store.getState()
            let authAxios1 = axios.create({
                baseURL: 'http://' + global.apiUrl
            })
            authAxios1.post(`/audio/${id}`, data, {
                headers: {
                    // 'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((d) => {
                    // console.log(d, 'ddddddddddd')
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }
    
    editCase(id, data) {
        return new Promise((next, error) => {
            const { global } = store.getState()
            let authAxios1 = axios.create({
                baseURL: 'http://' + global.apiUrl
            })
            authAxios1.put(`/case/${id}`, data)
                .then((d) => {
                    // console.log(d, 'ddddddddddd')
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    test(data = {}) {
        return new Promise((next, error) => {
            authAxios.get(`/mayank`)
                .then((d) => {
                    console.log(d, 'ddddddddddd')
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }


}

export default new Request()
