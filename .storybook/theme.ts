import { DefaultTheme } from 'styled-components'

const BOX_SHADOW_1 = 'rgba(0,0,0,0.07)'
const BOX_SHADOW_2 = 'rgba(0,0,0,0.06)'
const BOX_SHADOW_3 = 'rgba(0,0,0,0.10)'

const theme: DefaultTheme = {
	brekpoints: {
		xs: '0',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1280px',
		xxl: '1400px',
	},
	colors: {
		GREEN: '#5FAF2D',
		GREEN2: '#005A28',
		BLACK: '#2C2A29',
		BLACK2: '#393F4C', // ?
		RED: '#E60041',
		SILVER: '#ECEFF4',
		GOLD: '#F2C141',
		GAINSBOROUGH: '#E5E5E5',
		GREY: '#7F8592',
		WHITE: '#FFFFFF',
	},
	divider: {
		GREY: '#D9DFE7',
	},
	boxShadow: {
		dp1: `0 0 2px 0 ${BOX_SHADOW_1}, 0 2px 2px 0 ${BOX_SHADOW_2}, 0 1px 3px 0 ${BOX_SHADOW_3}`,
		dp2: `0 2px 4px 0 ${BOX_SHADOW_1}, 0 3px 4px 0 ${BOX_SHADOW_2}, 0 1px 5px 0 ${BOX_SHADOW_3}`,
		dp4: `0 4px 5px 0 ${BOX_SHADOW_1}, 0 1px 10px 0 ${BOX_SHADOW_2}, 0 2px 4px 0 ${BOX_SHADOW_3}`,
		dp6: `0 6px 10px 0 ${BOX_SHADOW_1}, 0 1px 18px 0 ${BOX_SHADOW_2}, 0 3px 5px 0 ${BOX_SHADOW_3}`,
		dp8: `0 8px 10px 1px ${BOX_SHADOW_1}, 0 3px 14px 3px ${BOX_SHADOW_2}, 0 4px 5px 0 ${BOX_SHADOW_3}`,
		dp16: `0 16px 24px 2px ${BOX_SHADOW_1}, 0 6px 30px 5px ${BOX_SHADOW_2}, 0 8px 10px 0 ${BOX_SHADOW_3}`,
	},
	messageSenderColor: [
		'#A02245',
		'#DA5077',
		'#497079',
		'#6B9BA5',
		'#244579',
		'#4276C7',
		'#EE885E',
		'#FFC263',
	],
}

export default theme
