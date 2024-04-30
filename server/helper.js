import axios from 'axios';
import { getDataUrl } from "../src/constants/urls.constants";

export const getApiData = async (path) => {
    const url = `${getDataUrl}${path}`;

    return await axios.get(url)
        .then(response => {
            console.log('response', response);
            return response.data;
        })
        .catch(error => {
            console.error('Error getting API data:', error);
            throw error;
        });
};

export default function parseJSON(string) {
    try {
        return JSON.parse(string);
    } catch (e) {
        return false;
    }
}
