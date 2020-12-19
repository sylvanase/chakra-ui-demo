import React from 'react'
import {
	Box,
	Image,
	Badge,
	Text,
	HStack,
	useColorModeValue,
} from '@chakra-ui/react'
import chakraUI from '../assets/images/chakra-ui.png'

export default function Card() {
	const bgColor = useColorModeValue('gray.200', 'gray.700')
	const textColor = useColorModeValue('gray.700', 'gray.100')
	return (
		<Box
			bgColor={bgColor}
			w={1 / 2}
			borderRadius="lg"
			boxShadow="lg"
			overflow="hidden"
		>
			<Image src={chakraUI} />
			<Box p={3}>
				<HStack direction="horizontal" align="center">
					<Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">
						react
					</Badge>
					<Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">
						chakra-ui
					</Badge>
					<Text>card demo</Text>
				</HStack>
				<Text
					fontSize="xl"
					pt={3}
					pb={2}
					color={textColor}
					as="h3"
					fontWeight="semibold"
				>
					Title
				</Text>
				<Text fontWeight="light" fontSize="sm" lineHeight="tall">
					Chakra UI 是一个简单的, 模块化的易于理解的 UI 组件库. 提供了丰富的构建
					React 应用所需的UI组件.
					在整个应用程序中，在任何组件上快速、轻松地引用主题中的值。组件的构建考虑到了组合。你可以利用任何组件来创造新事物。Chakra-UI
					严格遵循WAI-ARIA标准。所有组件都有适当的属性和现成的键盘交互。Chakra
					UI 是一个简单的, 模块化的易于理解的 UI 组件库. 提供了丰富的构建 React
					应用所需的UI组件.
				</Text>
			</Box>
		</Box>
	)
}
