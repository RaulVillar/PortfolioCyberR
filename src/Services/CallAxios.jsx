import axios from 'axios';

const CallAxios = () => {

    const url = "https://api.npoint.io/725918c3ecb3ffcc47d9"

    const getProjects = async () => {
        const res = await axios.get(`${url}/projects`);
        return res;
    };

    return {
        getProjects,
        url
    };
}

export default CallAxios