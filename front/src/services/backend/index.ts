import axios from 'axios';

import { BACKEND_URL } from 'config/services';

const backendApi = axios.create({
	baseURL: BACKEND_URL,
	timeout: 3000,
});

const backendService = {};

export { backendApi };
export default backendService;
