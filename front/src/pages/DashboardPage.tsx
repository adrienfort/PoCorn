import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, Image, Link, Stack, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react';

import services from 'services';

import bot from 'assets/bot.svg';

import WhiteInput from 'components/Input/WhiteInput';
import WhiteSelect from 'components/Select/WhiteSelect';
import WhiteNumberInput from 'components/NumberInput/WhiteNumberInput';
import GenerateModal from 'components/Modal/GenerateModal';

const networks = [
	'ethereum-mainnet',
	'ethereum-ropsten',
	'ethereum-goerli',
	'binance-mainnet',
	'binance-testnet',
	'avalanche-mainnet',
	'avalanche-fuji',
	'polygon-mainnet',
	'polygon-mumbai',
];

const activities = [
	'ADDRESS_ACTIVITY',
	'ADDRESS_RECEIVED_NATIVE_CURRENCY',
	'ADDRESS_SENT_NATIVE_CURRENCY',
	'EVENT_TRANSFER',
	'EVENT_MINT',
	'EVENT_APPROVAL',
	'ERC721_EVENT_TRANSFER',
	'ERC1155_EVENT_TRANSFER_SINGLE',
	'ERC1155_EVENT_TRANSFER_BATCH',
];

const HomePage = (): JSX.Element => {
	const [walletAddress, setWalletAddress] = useState('');
	const [network, setNetwork] = useState(networks[0]);
	const [activity, setActivity] = useState(activities[0]);
	const [nbBlocks, setNbBlocks] = useState(1);
	const [webhook, setWebhook] = useState('');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const copyWebhook = () => {
		navigator.clipboard.writeText(webhook);
		toast({
			title: 'Copied !',
			duration: 3000,
			status: 'success',
		});
		onClose();
	};

	const generate = () => {
		if (walletAddress === '') {
			toast({
				title: 'Invalid wallet address',
				duration: 5000,
				status: 'error',
			});
			return;
		}
		if (network === '') {
			toast({
				title: 'Invalid blockchain',
				duration: 5000,
				status: 'error',
			});
			return;
		}
		if (activity === '') {
			toast({
				title: 'Invalid activity',
				duration: 5000,
				status: 'error',
			});
			return;
		}
		if (nbBlocks < 1) {
			toast({
				title: 'Invalid number of blocks',
				duration: 5000,
				status: 'error',
			});
			return;
		}

		onOpen();
		const value = services.backend.generateWebhook({
			walletAddress,
			network,
			activity,
			nbBlocks,
		});
		setWebhook(value.webhook);
	};

	return (
		<>
			<Stack
				direction={{ base: 'column-reverse', lg: 'row' }}
				wrap="wrap-reverse"
				align="center"
				justify="center"
				w="100%"
				minH="100vh"
				spacing={{ base: '32px', md: '48px', lg: '64px' }}
			>
				<VStack w={{ base: '90%', md: '496px' }} spacing="16px">
					<VStack spacing="8px" w="100%" align="left">
						<Text color="white" fontWeight="500">
							Your wallet address
						</Text>
						<WhiteInput placeholder="Enter your wallet address" onChange={(e) => setWalletAddress(e.target.value)} />
					</VStack>
					<VStack spacing="8px" w="100%" align="left">
						<Text color="white" fontWeight="500">
							Select the blockchain
						</Text>
						<WhiteSelect defaultValue={activities[0]} onChange={(e) => setNetwork(e.target.value)}>
							{networks.map((element, index) => (
								<option style={{ background: 'black' }} value={element} id={index.toString()}>
									{element}
								</option>
							))}
						</WhiteSelect>
					</VStack>
					<VStack spacing="8px" w="100%" align="left">
						<Text color="white" fontWeight="500">
							Select the activity
						</Text>
						<WhiteSelect defaultValue={networks[0]} onChange={(e) => setActivity(e.target.value)}>
							{activities.map((element, index) => (
								<option style={{ background: 'black' }} value={element} id={index.toString()}>
									{element}
								</option>
							))}
						</WhiteSelect>
					</VStack>
					<VStack spacing="8px" w="100%" align="left">
						<Text color="white" fontWeight="500">
							Choose the number of blocks
						</Text>
						<WhiteNumberInput
							w="100%"
							step={1}
							min={1}
							defaultValue={1}
							onChange={(_, valueNumber) => setNbBlocks(valueNumber)}
						/>
					</VStack>
					<Link as={RouteLink} to="/dashboard" w="100%" mt="32px !important">
						<Button variant="inline" w="100%" onClick={generate}>
							Generate
						</Button>
					</Link>
				</VStack>
				<Image src={bot} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
			</Stack>

			<GenerateModal isOpen={isOpen} onClose={onClose} submit={copyWebhook} />
		</>
	);
};

export default HomePage;
