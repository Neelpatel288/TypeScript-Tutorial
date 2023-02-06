class User {
	protected _courseCount = 1

	constructor(public email: string, public name: string) {}

	get getAppleEmail(): string {
		return `apple ${this.email}`
	}

	get courseCount(): number {
		return this._courseCount
	}
	set courseCount(courseNumber) {
		if (courseNumber <= 1) {
			throw new Error('Course count should be more than 1')
		}
		this._courseCount = courseNumber
	}
}

class SubUser extends User {
	isFamily: boolean = true
	changeCourseCount() {
		this._courseCount = 4
	}
}

const hitesh = new User('h@hitesh.com', 'hitesh')
