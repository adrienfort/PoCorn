import { Link as RouteLink } from 'react-router-dom';
import { Button, Image, Link, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';

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

const addresses = [
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
	const { isOpen, onOpen, onClose } = useDisclosure();

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
						<WhiteInput placeholder="Enter your wallet address" />
					</VStack>
					<VStack spacing="8px" w="100%" align="left">
						<Text color="white" fontWeight="500">
							Select the blockchain
						</Text>
						<WhiteSelect>
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
						<WhiteSelect>
							{addresses.map((element, index) => (
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
						<WhiteNumberInput w="100%" />
					</VStack>
					<Link as={RouteLink} to="/dashboard" w="100%">
						<Button variant="inline" w="100%" onClick={onOpen}>
							Generate
						</Button>
					</Link>
				</VStack>
				<Image src={bot} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
			</Stack>

			<GenerateModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default HomePage;
