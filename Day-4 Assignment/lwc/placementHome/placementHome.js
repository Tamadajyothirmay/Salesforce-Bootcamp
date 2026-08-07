import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {

    studentName = 'Jyothirmay';
    rollNumber = '22B81A0501';
    department = 'CSE';

    todayDate = new Date().toLocaleDateString();

    students = 120;
    companies = 25;
    jobs = 63;
    applications = 5;

    welcomeMessage = '';

    applicationStatus = 'Not Applied';


    handleWelcome() {
        this.welcomeMessage = 
        'Welcome to Salesforce Development.';
    }


    handleApply() {
        this.applicationStatus = 'Applied';
    }

}