import { Select, SelectProps } from '@chakra-ui/react';

// Note : It would be better to create a variant
const WhiteSelect = ({ ...rest }: SelectProps): JSX.Element => (
	<Select
		border="2px solid"
		borderColor="black.300"
		color="white"
		_focus={{ outline: 'none', borderColor: 'white' }}
		{...rest}
	/>
);

export default WhiteSelect;
