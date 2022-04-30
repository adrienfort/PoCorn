import { Input, InputProps } from '@chakra-ui/react';

// Note : It would be better to create a variant
const WhiteInput = ({ ...rest }: InputProps): JSX.Element => (
	<Input
		border="2px solid"
		borderColor="black.300"
		color="white"
		_focus={{ outline: 'none', borderColor: 'white' }}
		{...rest}
	/>
);

export default WhiteInput;
