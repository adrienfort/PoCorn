import { Link as RouteLink } from 'react-router-dom';
import { Button, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

import notifications from 'assets/notifications.svg';
import poc from 'assets/poc.png';

import OutlineButton from 'components/Button/OutlineButton';

const HomePage = (): JSX.Element => (
	<Stack
		direction={{ base: 'column-reverse', lg: 'row' }}
		wrap="wrap-reverse"
		align="center"
		justify="center"
		w="100%"
		minH="100vh"
		spacing={{ base: '32px', md: '48px', lg: '64px' }}
	>
		<VStack spacing="56px">
			<VStack spacing="16px">
				<Text
					fontSize={{ base: '32px', md: '56px', lg: '72px' }}
					fontWeight="extrabold"
					bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
					bgClip="text"
					textAlign="center"
				>
					PoCorn
				</Text>
				<Text
					fontSize={{ base: '6px', '3xs': '10px', '2xs': '12px', xs: '14px', '2sm': '16px' }}
					textAlign="center"
					w="520px"
					maxW="90vw"
				>
					Setup your discord bot keeping you informed of what's happening on your blockchain
				</Text>
			</VStack>
			<VStack w={{ base: '90%', md: '496px' }}>
				<Link as={RouteLink} to="/dashboard" w="100%">
					<Button variant="inline" w="100%">
						Start
					</Button>
				</Link>
				<Link href="https://github.com/PoCInnovation" w="100%" isExternal>
					<OutlineButton w="100%" content={<Image src={poc} w="100px" />} />
				</Link>
			</VStack>
		</VStack>
		<Image src={notifications} w={{ base: '320px', md: '420px', lg: '520px' }} maxW="90%" />
	</Stack>
);

export default HomePage;
