import axios from 'axios';

const urlRock = 'https://api.spacexdata.com/v3/rockets';

const fetchRockete = () => axios.get(urlRock);

export default fetchRockete;
