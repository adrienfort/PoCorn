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

type GenerateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	submit: () => void;
};

const GenerateModal = ({ isOpen, onClose, submit }: GenerateModalProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent bg="black.500">
			<ModalHeader color="white"></ModalHeader>
			<ModalCloseButton color="white" />
			<Stack align="center">
				<Image src={collaboration} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
				<Text align="center">
					We've generated a discord webhook keeping you informed of what's happening on your blockchain.
				</Text>
			</Stack>
			<ModalFooter>
				<Button variant="inline" w="100%" onClick={submit}>
					Copy
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default GenerateModal;
