// import { backendApi } from '.';

type GenerateWebhookBody = {
	walletAddress: string;
	network: string;
	activity: string;
	nbBlocks: number;
};

// type GenerateWebhookResponse = {
// 	webhook: string;
// };

// export const generateWebhook = (data: GenerateWebhookBody) =>
// 	backendApi.post<GenerateWebhookResponse>('/generate', data);

export const generateWebhook = (data: GenerateWebhookBody) => {
	console.log(data);
	return { webhook: 'qsdfghjklmlkjhgfdsqsdfghjklmlkjhgfdsq' };
};
