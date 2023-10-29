import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = "39285173-ea4da0ae6bb26a8edf50191ae";

export const fetchImeges = async (search, page) => {
    const params = {
        q: search,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    };
    const response = await axios.get('https://pixabay.com/api/', { params });
    console.log(response.data);
    return response.data;
};