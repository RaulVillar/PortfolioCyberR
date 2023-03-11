import axios from 'axios';

const CallAxios = () => {

    const url = "http://localhost:5000"

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