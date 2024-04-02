import axios from "axios";
import { history } from "..";
export const TOKEN = 'accesstoken'
export const DOMAIN_BACKEND = 'https://shop.cyberlearn.vn'

export const http = axios.create({
    baseURL:DOMAIN_BACKEND, //domain
    timeout:30000 //thời gian tối đa chờ của 1 request
})

//cấu hình request
http.interceptors.request.use((config)=>{
    //tất cả các request gửi đi sẽ được chứa trong phần header là token đăng nhập
    config.headers = {...config.headers,
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
    return config
}, err=>{
    return Promise.reject(err)
})

//cấu hình response

http.interceptors.response.use((res)=>{
    //Thành công 
    return res
},err => {
    //Xử lý thất bại
    // window.location.href = '/';
    console.log('util',err.response)
    const statusCode = err.response.status
    if (statusCode === 400) {
        //Chuyển hướng trang về home
        history.push('/')
    }else if (statusCode === 401) {
        //Kiểm tra token hết hạn hay chưa
        //Nếu hết hạn thì gọi api refeshtoken
        const decodedToken = jwtDecode(localStorage.getItem(TOKEN))
        const date = new Date(decodedToken.exp * 1000); 
        console.log(date)
        if (date < Date.now()) {
            //Gọi api refresh token 
            console.log('gọi api refresh token')
        }  
        //Không có token chuyển hướng về trang login bắt đăng nhập
        alert('Đăng nhập để vào trang này')
        history.push('/login')
    }else if (statusCode === 403) {
        alert('Không đủ quyền truy cập vào trang này')
        history.push('/')
    }else if (statusCode === 500){
        console.log(err.response.message)
    }

    return Promise.reject(err)
})