import {axiosService} from "./axios.service";
import {urlsM} from "../constants";

const moviesListService = {
    
    getAll:()=>axiosService.get(urlsM.movies)

}

export{
    moviesListService
}