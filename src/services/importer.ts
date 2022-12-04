import axios from 'axios';

export const baseURL = 'http://localhost:8080';

const importer = axios.create({
    baseURL,
    validateStatus(status) {
        return status === 200;
    },
});

export default importer;
