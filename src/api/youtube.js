import axios from "axios";

const KEY='AIzaSyDwClImWse-ul_eTDSsWW0iwnfb0JkosxA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})