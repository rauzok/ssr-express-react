import axios from 'axios';
import { getDataUrl } from "../src/constants/urls.constants";

export const getApiData = async (path) => {
    const url = `${getDataUrl}${path}`;

    return await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error getting API data:', error);
            throw error;
        });
};
