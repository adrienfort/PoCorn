import { Link as RouteLink } from 'react-router-dom';
import { Box, Link, HStack, Text, Divider } from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

const TopBar = () => (
	<Box as="nav" w="100vw" h="80px" position="fixed" left="0" top="0">
		<HStack w="100%" h="100%" px="24px" py="32px" justify="space-between" bg="black.700">
			<Link as={RouteLink} to="/dashboard">
				<Text
					fontSize={{ base: '16px', sm: '24px' }}
					fontWeight="bold"
					bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
					bgClip="text"
					id="app-sideBar-title"
				>
					Artists Book
				</Text>
			</Link>
		</HStack>
		<Divider />
	</Box>
);

export default TopBar;
