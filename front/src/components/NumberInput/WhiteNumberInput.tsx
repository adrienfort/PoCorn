import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputProps,
	NumberInputStepper,
} from '@chakra-ui/react';

// Note : It would be better to create a variant
const WhiteNumberInput = ({ ...rest }: NumberInputProps): JSX.Element => (
	<NumberInput {...rest}>
		<NumberInputField
			border="2px solid"
			borderColor="black.300"
			color="white"
			w="100%"
			_focus={{ outline: 'none', borderColor: 'white' }}
		/>
		<NumberInputStepper>
			<NumberIncrementStepper color="white" />
			<NumberDecrementStepper color="white" />
		</NumberInputStepper>
	</NumberInput>
);

export default WhiteNumberInput;
