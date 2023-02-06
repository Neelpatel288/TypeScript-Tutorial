"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User('h@hitesh.com', 'hitesh');
