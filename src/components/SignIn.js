import React from 'react'
import {
	Input,
	Stack,
	InputGroup,
	InputLeftAddon,
	Button,
	FormControl,
	Checkbox,
	CheckboxGroup,
	FormErrorMessage,
} from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import axios from 'axios'

export default function SignIn() {
	return (
		<Formik
			initialValues={{ email: 'jake@jake.jake', password: 'jakejake' }}
			validate={(values) => {
				const errors = {}
				if (!values.email) {
					errors.email = '请输入手机号或邮箱'
				} else if (!values.password) {
					errors.password = '请输入密码'
				}
				return errors
			}}
			onSubmit={(values, actions) => {
				console.log(JSON.stringify(values, null, 2))
				axios({
					method: 'post',
					url: 'https://conduit.productionready.io/users/login',
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
						<Field name="email">
							{({ field, form }) => (
								<FormControl
									isInvalid={form.errors.email && form.touched.email}
								>
									<InputGroup>
										<InputLeftAddon children={<FaUserAlt />} />
										<Input
											id="email"
											{...field}
											placeholder="手机号或邮箱"
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
											placeholder="密码"
											type="password"
											{...field}
											id="password"
										></Input>
									</InputGroup>
									<FormErrorMessage>{form.errors.password}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<CheckboxGroup defaultValue="0">
							<Checkbox defaultIsChecked>记住我</Checkbox>
						</CheckboxGroup>

						<Button
							mt={4}
							colorScheme="blue"
							isLoading={props.isSubmitting}
							type="submit"
						>
							登录
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	)
}
