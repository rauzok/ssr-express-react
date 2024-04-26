import axios from 'axios';
import { getDataUrl } from "../constants/urls.constants";

export const getApiData = async (path) => {
    const url = `${getDataUrl}${path}`;

    return await axios.get(url);
};
