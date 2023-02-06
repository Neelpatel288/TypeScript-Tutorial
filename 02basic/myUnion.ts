let score: number | string = 33

score = 44

type User = {
	name: string
	id: number
}

type Admin = {
	userame: string
	id: number
}

let hitesh: User | Admin = { name: 'neel', id: 334 }

hitesh = { userame: 'neel', id: 334 }

// function getDbId(id: number | string) {
// 	console.log(`DB id id ${id}`)
// }
function getDbId(id: number | string) {
	if (typeof id === 'string') {
		id.toLowerCase()
	}
}

getDbId(3)
getDbId('3')

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: (number | string | boolean)[] = [1, 2, 3]

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
