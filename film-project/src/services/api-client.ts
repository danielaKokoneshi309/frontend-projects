import axios from "axios";
export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    
     params:{
            language: 'en-US',
            page: 1,
            api_key:'1d1d8844ae1e746c459e7be85c15c840'
     }
});