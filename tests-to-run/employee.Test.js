const Employee = require("../lib/Employee");
// allows the user to make a employee
describe("Employee", () => {
    it('allows the name to be set using a constructor', () => {
        const newEmployee = new Employee();
        expect(newEmployee).toEqual('Employee');
    });
});
// employee enters their email
describe("getEmail", () => {
    it("should show the email attached to this specfifc employee", () => {
        const employee = new Employee('name', 'id', 'email.com');
        expect(employee.getEmail()).toEqual('email.com');
    });
});
// should get the name for the employee
describe('getName', () => {
    it("should show the name attached to this specific employee", () => {
        const employee = new Employee('Noel', 'id', 'email');
        expect(employee.getName()).toEqual('Noel')
    })
});
// should get the id for the user 
describe('getId', () => {
    it('should show the id attached to this specific employee', () => {
        const employee = new Employee('name', '56789', 'email');
        expect(employee.getId()).toEqual('56789');
    });
});



