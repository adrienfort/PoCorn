import { Input, InputProps } from '@chakra-ui/react';

// Note : It would be better to create a variant
const GrayInput = ({ ...rest }: InputProps): JSX.Element => (
	<Input
		border="2px solid"
		borderColor="black.500"
		color="white"
		_focus={{ outline: 'none', borderColor: 'black.300' }}
		{...rest}
	/>
);

export default GrayInput;
