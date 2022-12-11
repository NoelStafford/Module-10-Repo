const { hasUncaughtExceptionCaptureCallback } = require('process');
const Engineer = require('../lib/engineer');
// set role as an engineer
describe('Enginner', () => {
    describe('getRole', () => {
        it('should set the role of this specfic employee to Manager', () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toEqual('Enginner');
        });
    });
    // get the email of the enginner pulled from my employee test
    describe("getEmail", () => {
        it("should show the email attached to this specfifc employee", () => {
            const engineer = new Engineer('name', 'id', 'email.com');
            expect(engineer.getEmail()).toEqual('email.com');
        });
    });
    // gets the name of the engineer and pulled from employee test
    describe('getName', () => {
        it("should show the name attached to this specific employee", () => {
            const engineer = new Engineer('Noel', 'id', 'email', 'github');
            expect(engineer.getName()).toEqual('Noel')
        })
    });
    // gets the id of the engineer and pulled from employee test
    describe('getId', () => {
        it('should show the id attached to this specific employee', () => {
            const engineer = new Engineer('name', '56789', 'email');
            expect(engineer.getId()).toEqual('56789');
        });
    });
    // get the github of the engineer
    describe('getGithub', () => {
        it('should show the github name of the engineer', () => {
            const engineer = new Engineer('name', 'id', 'email', 'NoelStafford');
            expect(engineer.getGitHub()).toEqual('NoelStafford');
        });
    });
    
});
