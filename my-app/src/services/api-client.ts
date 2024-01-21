import axios from 'axios';


export default axios.create( {
    baseURL:"https://api.rawg.io/api/", 
    params:{
    key:'439ec6ef62b442f5b8fea3c80c01f14f'
}
})