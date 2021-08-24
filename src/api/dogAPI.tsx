import axios from 'axios';

const dogAPI= axios.create({
    baseURL: 'https://dog.ceo/api',
});

export default dogAPI;