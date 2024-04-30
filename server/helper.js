import axios from 'axios';
import {getDataUrl} from "../src/constants/urls.constants";

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

export const getUsersData = (responseList, userId) => {
    const usersData = {
        currentUserData: {},
        filteredUsersList: []
    }

    if (!responseList?.length) {
        return usersData;
    }

    return responseList.reduce((acc, current) => {
        if (current.id === userId) {
            return {
                ...acc,
                currentUserData: current,
            }
        }

        return {
            ...acc,
            filteredUsersList: [...acc.filteredUsersList, current],
        }
    }, usersData);
};
