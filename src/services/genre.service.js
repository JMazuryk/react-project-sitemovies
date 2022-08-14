import {axiosService} from "./axios.service";
import {urlsG} from "../constants";

const genreService = {

    getAll:()=>axiosService.get(urlsG.genres)

}

export{
    genreService
}