const db = require('../db');
const Student = require('../models/student');
const { v4: uuidv4 } = require('uuid');

const addStudent = async (req, res, next) => {
	const dateAdded = { created: Date.now() };
	const id = { id: uuidv4() };

	try {
		const data = { ...req.body, ...dateAdded, ...id };
		console.log(data);
		await db.collection('students').doc().set(data);
		res.status(200).send('Record saved!');
	} catch (e) {
		res.status(400).send(e.message);
	}
};

const getAllStudents = async (req, res, next) => {
	let studentsArray = [];
	try {
		const students = await db.collection('students').orderBy('lastName').get();
		const data = students.docs.map((doc) => doc.data());
		if (data.length === 0) {
			res.status(404).send('No students found!');
		} else {
			data.forEach((doc) => {
				const student = new Student(
					doc.id,
					doc.firstName,
					doc.lastName,
					doc.email,
					doc.phone,
					doc.imageUrl,
					doc.dateOfBirth,
					doc.created
				);
				studentsArray.push(student);
			});
			res.status(200).send(studentsArray);
		}
	} catch (e) {
		res.status(400).send(e.message);
	}
};

module.exports = {
	addStudent,
	getAllStudents,
};
