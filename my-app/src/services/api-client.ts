import axios from 'axios';


export default axios.create( {
    baseURL:"https://api.rawg.io/api/", 
    params:{
    key:'f421d17132f84201985e05fd5f42038e'
}
})