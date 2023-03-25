import axios from "axios";
import {config} from "react-transition-group";

export default class PostsService{
    static async Get(limit = 10, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}