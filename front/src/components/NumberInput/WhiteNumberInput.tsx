import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputFieldProps,
	NumberInputStepper,
} from '@chakra-ui/react';

// Note : It would be better to create a variant
const WhiteNumberInput = ({ ...rest }: NumberInputFieldProps): JSX.Element => (
	<NumberInput step={1} min={1} defaultValue={1} w="100%">
		<NumberInputField
			border="2px solid"
			borderColor="black.300"
			color="white"
			_focus={{ outline: 'none', borderColor: 'white' }}
			{...rest}
		/>
		<NumberInputStepper>
			<NumberIncrementStepper color="white" />
			<NumberDecrementStepper color="white" />
		</NumberInputStepper>
	</NumberInput>
);

export default WhiteNumberInput;
