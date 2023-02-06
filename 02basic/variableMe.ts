function addtwo(num: number) {
	return num + 2
}

addtwo(5)

function getUpper(val: string) {
	return val.toUpperCase()
}

getUpper('hetsskds')

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser('abc', 'acb', false)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

const user = {
	name: 'Hitesh',
	email: 'hitesh@lco.dev',
	isActive: true,
}

// function createUser({ name: string, isPaid: boolean }) {}

function createCourse(): { name: string; price: number } {
	return { name: 'react', price: 399 }
}

export {}

type User = {
	readonly _id: string
	name: string
	email: string
	isActive: boolean
	creditcardDetails?: number
}

let myuser: User = {
	_id: '1234',
	name: 'a',
	email: 'some@thing.com',
	isActive: false,
}

myuser.email = 'H@GMAIL.COM'
