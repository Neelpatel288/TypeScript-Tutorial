interface User3 {
	readonly dbId: number
	email: string
	userId: number
	googleId?: string
	startTrial(): string
	getCoupon(couponname: string, value: number): number
}

interface User3 {
	githubToken: string
}

interface Administ extends User3 {
	role: 'admin' | 'ta' | 'learner'
}

const hitesha: Administ = {
	dbId: 288,
	email: 'abc@123',
	userId: 16511651,
	role: 'admin',
	githubToken: 'github',
	startTrial: () => {
		return 'trial started'
	},
	getCoupon: (name: 'hitesh10', off: 10) => {
		return 10
	},
}

hitesha.email = '123@abc'
