import { Image, Stack } from '@chakra-ui/react';
import collaboration from 'assets/collaboration.svg';

import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import colors from 'theme/foundations/colors';

type GenerateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	channelID: string;
	walletAddress: string;
};

const GenerateModal = ({ isOpen, onClose, channelID, walletAddress }: GenerateModalProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent bg="black.500">
			<ModalHeader color="white"></ModalHeader>
			<ModalCloseButton color="white" />
			<Stack align="center" spacing="32px">
				<Image src={collaboration} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
				<Text align="center">
					We've successfully created a discord bot on the <span style={{ color: colors.blue[700] }}>{channelID}</span>{' '}
					channel keeping you informed of what's happening on the{' '}
					<span style={{ color: colors.blue[700] }}>{walletAddress}</span> wallet.
				</Text>
			</Stack>
			<ModalFooter mt="16px">
				<Button variant="inline" w="100%" onClick={onClose}>
					Close
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default GenerateModal;
