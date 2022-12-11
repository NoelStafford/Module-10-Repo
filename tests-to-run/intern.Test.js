const Intern = require('../lib/intern');
// set the role of employee to intern
describe('Intern', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Intern', () => {
            const intern = new Intern();
            expect(intern.getRole()).toEqual('Intern');
        });
    });
    // get the email of the intern
    describe("getEmail", () => {
        it("should show the email attached to this specfifc employee", () => {
            const intern = new Intern('name', 'id', 'email.com', 'school');
            expect(intern.getEmail()).toEqual('email.com');
        });
    });
    // get the name of the intern
    describe('getName', () => {
        it("should show the name attached to this specific employee", () => {
            const intern = new Intern('Noel', 'id', 'email', 'school');
            expect(intern.getName()).toEqual('Noel')
        })
    });
    // get the id of the intern
    describe('getId', () => {
        it('should show the id attached to this specific employee', () => {
            const intern = new Intern('name', '56789', 'email', 'school');
            expect(intern.getId()).toEqual('56789');
        });
    });
    // get the school of the intern
    describe('getSchool', () => {
        it('should show the school attached to the intern', () => {
            const intern = new Intern('name', '56789', 'email', 'FSU');
        });
    });  
});
