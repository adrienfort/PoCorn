import { Link as RouteLink } from 'react-router-dom';
import { Button, Link, Text, VStack } from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

import OutlineButton from 'components/Button/OutlineButton';

const HomePage = (): JSX.Element => (
	<VStack spacing="56px" mt={{ base: '96px', md: '132px' }}>
		<VStack spacing="16px">
			<Text
				fontSize={{ base: '32px', md: '56px', lg: '72px' }}
				fontWeight="extrabold"
				bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
				bgClip="text"
				id="app-title"
				textAlign="center"
			>
				Artists Book
			</Text>
			<Text
				fontSize={{ base: '6px', '3xs': '10px', '2xs': '12px', xs: '14px', '2sm': '16px' }}
				id="app-sub-title"
				textAlign="center"
			>
				Manage your favorite Artists
			</Text>
		</VStack>
		<VStack w={{ base: '90%', md: '496px' }} pb={{ base: '32px', md: '48px', lg: '64px' }}>
			<Link as={RouteLink} to="/register" w="100%">
				<Button variant="inline" w="100%" id="app-homePage-register-button">
					Create an account
				</Button>
			</Link>
			<Link as={RouteLink} to="/login" w="100%" id="app-homePage-login-button">
				<OutlineButton w="100%" text="Login" />
			</Link>
		</VStack>
	</VStack>
);

export default HomePage;
