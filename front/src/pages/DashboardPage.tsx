import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, Text, useToast } from '@chakra-ui/react';

const Dashboard = (): JSX.Element => {
	const toast = useToast();
	const navigate = useNavigate();

	return (
		<HStack align="start" mt="128px">
			<Text>coucou</Text>
		</HStack>
	);
};

export default Dashboard;
