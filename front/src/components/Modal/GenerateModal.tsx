import { Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack } from '@chakra-ui/react';
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
};

const GenerateModal = ({ isOpen, onClose }: GenerateModalProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent bg="black.500">
			<ModalHeader color="white"></ModalHeader>
			<ModalCloseButton color="white" />
			<Stack align="center">
				<Image src={collaboration} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
				<Text align="center" fontWeight={500}>Here is your discord webhook</Text>
			</Stack>
			<ModalFooter>
				<InputGroup size='sm'>
					<Input placeholder='mysite' />
					<InputRightAddon children='.com' />
				</InputGroup>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default GenerateModal;
