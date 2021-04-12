const express = require('express');
const router = express.Router();
const Employee = require('../Models/Employee');

//Get all Employees
router.get('/', async (req, res) => {
	try {
		const employees = await Employee.find();
		res.json(employees);
	} catch (err) {
		res.json({ message: err });
	}
});

//Submit Employee
router.post('/', async (req, res) => {
	const employee = new Employee({
		name: req.body.name,
		salary: req.body.salary,
		doB: req.body.doB,
		status: req.body.status,
	});

	try {
		const savedEmployee = await employee.save();
		res.json(savedEmployee);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update Employee Salary
router.patch('/:employeeID', async (req, res) => {
	try {
		const updatedEmployee = await Employee.updateOne(
			{ _id: req.params.employeeID },
			{ $set: { salary: req.body.salary } }
		);
		res.json(updatedEmployee);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delete Employee
router.delete('/:employeeID', async (req, res) => {
	try {
		const deletedEmployee = await Employee.deleteOne({
			_id: req.params.employeeID,
		});
		res.json(deletedEmployee);
	} catch (err) {
		res.json({ message: err });
	}
});

//Get employee by ID
router.get('/:employeeID', async (req, res) => {
	try {
		const employee = await Employee.findById(req.params.employeeID);
		res.json(employee);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
