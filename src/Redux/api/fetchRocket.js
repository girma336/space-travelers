import axios from 'axios';

const urlRock = 'https://api.spacexdata.com/v4/rockets';

const fetchRockete = () => axios.get(urlRock);

export default fetchRockete;
