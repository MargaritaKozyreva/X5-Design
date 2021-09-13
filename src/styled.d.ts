import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		brekpoints: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
			xxl: string
		}
		colors: {
			GREEN: string
			GREEN2: string
			BLACK: string
			BLACK2: string
			RED: string
			SILVER: string
			GOLD: string
			GAINSBOROUGH: string
			GREY: string
			WHITE: string
		}
		divider: {
			GREY: string
		}
		boxShadow: {
			dp1: string
			dp2: string
			dp4: string
			dp6: string
			dp8: string
			dp16: string
		}
		messageSenderColor: string[]
	}
}
