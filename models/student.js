class Student {
	constructor(
		id,
		firstName,
		lastName,
		email,
		phone,
		imageUrl,
		dateOfBirth,
		created
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.imageUrl = imageUrl;
		this.dateOfBirth = dateOfBirth;
		this.created = created;
	}
}

module.exports = Student;
