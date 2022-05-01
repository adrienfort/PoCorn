import axios from 'axios';

import { BACKEND_URL } from 'config/services';

import { generateWebhook } from './generateWebhook';

const backendApi = axios.create({
	baseURL: BACKEND_URL,
	timeout: 3000,
});

const backendService = {
	generateWebhook,
};

export { backendApi };
export default backendService;
