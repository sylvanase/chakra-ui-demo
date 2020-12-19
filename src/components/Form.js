import React from 'react'
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Image,
} from '@chakra-ui/react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import chakraUILight from '../assets/images/chakra-ui-light.png'

export default function Form() {
	return (
		<Box bgColor="gray.200" p={3} w="100%" boxShadow="lg" borderRadius="lg">
			<Image src={chakraUILight} w="250px" mx="auto" mt="2" mb="6" />
			<Tabs isFitted>
				<TabList>
					<Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
					<Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SignUp />
					</TabPanel>
					<TabPanel>
						<SignIn></SignIn>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}
