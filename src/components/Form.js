import React from 'react'
import {
	Input,
	Stack,
	InputGroup,
	InputLeftAddon,
	InputRightAddon,
	FormHelperText,
	Radio,
	RadioGroup,
	Select,
	Switch,
	FormLabel,
	Flex,
	Button,
	FormControl,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'

export default function Form() {
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
				<RadioGroup defaultValue="0">
					<Stack direction="horizontal" spacing="4">
						<Radio value="0">男</Radio>
						<Radio value="1">女</Radio>
					</Stack>
				</RadioGroup>
				<Select placeholder="请选择学科">
					<option value="js">JavaScript</option>
					<option value="java">Java</option>
				</Select>
				<Flex>
					<Switch id="deal" mr="3" />
					<FormLabel htmlFor="deal">是否同意协议</FormLabel>
				</Flex>
				<Button _hover={{ bgColor: 'tomato' }} w="100%" colorScheme="teal">
					注册
				</Button>
			</Stack>
		</form>
	)
}
