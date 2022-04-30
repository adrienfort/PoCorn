import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

type GenerateModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const GenerateModal = ({ isOpen, onClose }: GenerateModalProps): JSX.Element => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent bg="black.500">
			<ModalHeader color="white">Add an Artist</ModalHeader>
			<ModalCloseButton color="white" />
			<ModalBody pb={6}>
				<VStack align="start" spacing={{ base: '8px', md: '16px' }} w="100%">
					<HStack spacing="16px" align="center">
						<Text>Rate this artist :</Text>
					</HStack>
				</VStack>
			</ModalBody>

			<ModalFooter>
				<Button variant="inline" w="100%">
					Add
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default GenerateModal;
