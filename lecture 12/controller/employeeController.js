const employees = require('../data/employeeData');
const getEmployees = (req, res) => {
    res.json(employees);
}

const getEmployeeById = (req, res) => {
    const id = req.params.empId;
    const employee = employees.find(employee => employee.empId == Number(id));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};  

const addEmployee = (req, res) => {
    const employee = req.body;
    employees.push({empId: employees.length + 1, ...employee});
    res.json({ success: true, employee });
}

const updateEmployee = (req, res) => {
    const id = req.params.empId;
    const employee= req.body;
    const result = employees.find(emp => emp.empId == Number(id));
    if (!result) {
        res.status(404).json({ message: 'Employee not found' });
        return;
    }
    result.empName=employee.name;
    result.empSalary=employee.salary;
    result.department=employee.department;
    console.log(result)
    res.json({ success: true, employee });
};

const deleteEmployee = (req, res) => {
    const id = req.params.empId;
    const result=employees.find(emp => emp.empId == Number(id));
    if (!result) {
        res.status(404).json({success:false,message:"employee not found"});
    }
    employees.splice(id-1, 1);
    res.json({success:true,result});
}

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};