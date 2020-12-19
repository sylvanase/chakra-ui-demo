import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function Form() {
	return (
		<Box p={3} w="100%" boxShadow="lg" borderRadius="lg">
			<Tabs isFitted>
				<TabList>
					<Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
					<Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SignIn />
					</TabPanel>
					<TabPanel>
						<SignUp />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}
