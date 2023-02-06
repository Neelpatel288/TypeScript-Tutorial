// const user: (string | number)[] = [1, 'hcs']

const user: [string, number, boolean] = ['hcs', 1, true]

type User2 = [number, string]
let newUser: User2 = [112, 'abc@gmail.com']
newUser[1] = 'hc.com'

newUser.push('string')
