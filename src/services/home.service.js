import {axiosService} from "./axios.service";
import {urlsH} from "../constants";

const homeService = {
    
    getAll:()=>axiosService.get(urlsH.nowPlayingMovies)

}

export{
    homeService
}