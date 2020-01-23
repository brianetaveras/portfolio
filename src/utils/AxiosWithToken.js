import axios from 'axios';


export default function axiosWithToken(){
    const token= '45c1a26189ae5d54ae4b6c64bcbc3c';

    return axios.create({
        baseURL: 'https://api.briantastic.com/api',
        headers:{
            token: token
        }
    })
}