const express = require('express');
const {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controller/employeeController');
const router = express.Router();
// read opt
router.get('/',getEmployees); ;

//employee by id
router.get('/:empId', getEmployeeById);

router.post('/', addEmployee);

//update employee
router.put('/:empId', updateEmployee);


// delete employee
router.delete('/:empId', deleteEmployee);

module.exports = router;