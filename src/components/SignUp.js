import React from 'react'
import {
	Input,
	Stack,
	InputGroup,
	InputLeftAddon,
	Button,
	FormControl,
	FormErrorMessage,
} from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa'
import axios from 'axios'

export default function SignUp() {
	return (
		<Formik
			initialValues={{ email: '', password: '', username: '' }}
			validate={(values) => {
				const errors = {}
				if (!values.username) {
					errors.username = '请输入昵称'
				} else if (!values.email) {
					errors.email = '请输入手机号或邮箱'
				} else if (!values.password) {
					errors.password = '请输入密码'
				}
				return errors
			}}
			onSubmit={(values, actions) => {
				axios({
					method: 'post',
					url: 'https://conduit.productionready.io/users',
					data: {
						user: {
							...values,
						},
					},
				})
					.then((res) => {
						console.log(res)
						actions.setSubmitting(false)
					})
					.catch((error) => {
						alert(error.message)
						actions.setSubmitting(false)
					})
			}}
		>
			{(props) => (
				<Form>
					<Stack spacing="2">
						<Field name="username">
							{({ field, form }) => (
								<FormControl
									isInvalid={form.errors.username && form.touched.username}
								>
									<InputGroup>
										<InputLeftAddon children={<FaUserAlt />} />
										<Input
											id="username"
											{...field}
											placeholder="你的昵称"
										></Input>
									</InputGroup>
									<FormErrorMessage>{form.errors.username}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="email">
							{({ field, form }) => (
								<FormControl
									isInvalid={form.errors.email && form.touched.email}
								>
									<InputGroup>
										<InputLeftAddon children={<FaPhoneAlt />} />
										<Input
											placeholder="邮箱"
											type="email"
											{...field}
											id="email"
										></Input>
									</InputGroup>
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="password">
							{({ field, form }) => (
								<FormControl
									isInvalid={form.errors.password && form.touched.password}
								>
									<InputGroup>
										<InputLeftAddon children={<FaLock />} />
										<Input
											placeholder="设置密码"
											type="password"
											{...field}
											id="password"
										></Input>
									</InputGroup>
									<FormErrorMessage>{form.errors.password}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Button
							mt={4}
							colorScheme="teal"
							isLoading={props.isSubmitting}
							type="submit"
						>
							注册
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	)
}
