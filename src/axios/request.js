import axios from 'axios';
import router from '../router';


const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL,
})

// Add a request interceptor
requestAxios.interceptors.request.use( null,  error =>  {
    // Do something before request is sent

    if (error.response.status === 401 ) {
        router.push('/auth?message=auth')
    }
    return Promise.reject(error);

});


export default requestAxios;