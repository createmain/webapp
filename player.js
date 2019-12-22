// profile.js
export class Player {
    constructor(name, email) {
        this.name = name
        this.email = email
	}

    hello() {
        return `Hello, ${this.name}(${this.email})`
    }
}