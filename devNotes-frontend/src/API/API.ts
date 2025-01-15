import axios from 'axios'

const baseUrl = 'http://localhost:8000'

export const publicAPI = axios.create({
	baseURL: baseUrl,
});
