import axios from 'axios';

const BASE_URL = 'https://652282b4f43b1793841493ca.mockapi.io';

export const getAdverts = async (page = 1, limit = 12) => {
    try {
        const response = await axios.get(`${BASE_URL}/adverts`, {
            params: { page, limit },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
        return [];
    }
};

export const getAllAdverts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/adverts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all adverts:', error);
        throw error;
    }
};

