import { backendApi } from '.';

type GenerateWebhookBody = {
	walletAddress: string;
	network: string;
	activity: string;
	nbBlocks: number;
	channelID: string;
};

export const generateWebhook = (data: GenerateWebhookBody) => {
	console.log(data);
	return backendApi.post<void>('/watcher', {
		address: data.walletAddress,
		network: data.network,
		type: data.activity,
		confirmationsBlocks: data.nbBlocks,
		channelId: data.channelID,
	});
};
