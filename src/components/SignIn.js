import React from 'react'
import {
	Input,
	Stack,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	FormHelperText,
	Button,
	FormControl,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'

export default function SignIn() {
	return (
		<form>
			<Stack spacing="2">
				<FormControl isDisabled isInvalid>
					<InputGroup>
						<InputLeftAddon children={<FaUserAlt />} />
						<Input placeholder="请输入用户名"></Input>
					</InputGroup>
					<FormHelperText>用户名是必填项</FormHelperText>
				</FormControl>
				<InputGroup>
					<InputLeftAddon children={<FaLock />} />
					<Input placeholder="请输入密码" type="password"></Input>
					<InputRightAddon children={<FaCheck />} />
				</InputGroup>
				<Button _hover={{ bgColor: 'tomato' }} w="100%" colorScheme="teal">
					登录
				</Button>
			</Stack>
		</form>
	)
}
