
### Sprint 4 – Giving Intelligence to Placement Management System

## 1. What is Business Logic?

Business logic is the intelligence of an application that allows software to make decisions based on organisation rules and requirements.

Without business logic, software only stores data. With business logic, software can validate information, automate decisions, and enforce company policies.

Example:
In a Placement Management System, the application should decide whether a student can apply for a job based on eligibility rules.

---

# 2. Difference Between Data and Business Decisions

## Data:
Data represents stored information.

Examples:
- Student Name
- CGPA
- Branch
- Company Name
- Job Role
- Application Date


## Business Decisions:
Business decisions determine what actions the system should perform.

Examples:
- Allow or reject an application
- Check student eligibility
- Prevent duplicate applications
- Reject applications after deadlines

---

# 3. Identified Business Rules for Placement Management System

## Rule 1: Student Eligibility Check

Requirement:
Students should apply only if they meet company requirements.

Business Rule:
- Check minimum CGPA
- Check active backlogs
- Check branch eligibility


## Rule 2: Duplicate Application Prevention

Requirement:
Students should not apply multiple times for the same job.

Business Rule:
Before creating an application record, check existing applications.


## Rule 3: Deadline Validation

Requirement:
Students cannot apply after the deadline.

Business Rule:
Compare current date with application deadline.


## Rule 4: Company Job Validation

Requirement:
Companies should not create duplicate job postings.

Business Rule:
Check existing job records before creating a new job.


---

# 4. Business Responsibilities and Apex Classes Design

## Student Service Class

Responsibility:
Handles student-related operations.

Possible methods:
- createStudent()
- updateStudent()
- checkEligibility()


## Job Service Class

Responsibility:
Manages job opportunities.

Possible methods:
- createJob()
- updateJob()
- validateJob()


## Application Service Class

Responsibility:
Processes student applications.

Possible methods:
- applyForJob()
- checkDuplicateApplication()
- validateApplication()


---

# 5. Why Apex Classes Are Created Based on Responsibilities?

Apex classes should represent business responsibilities instead of just programming requirements.

Each class should have a clear purpose.

Example:

ApplicationService class handles application decisions because applications are a separate business responsibility.

This makes the application easier to maintain and expand.

---

# 6. Five Future Business Rules

Additional rules that can be implemented:

1. A student cannot apply after accepting an offer.

2. Students can apply only for limited number of companies.

3. Placement officers should approve applications before sending to recruiters.

4. Companies should receive notifications when eligible students apply.

5. Reports should automatically generate placement statistics.


---

# 7. Engineering Learnings

From this sprint, I learned:

- Software development is about solving business problems.
- Understanding requirements is more important than writing code quickly.
- Business rules should be identified before implementation.
- Apex classes should be designed around business responsibilities.
- Good software should make correct decisions automatically.


## Conclusion

In Sprint 4, I learned how business logic transforms a simple data storage application into an intelligent enterprise application.

The Placement Management System can now be designed to make decisions automatically using Apex business logic.



# 8. Thinking Like an Architect

Software should be designed before implementation.

Architecture defines how responsibilities are organised inside an application.

A good architecture makes software:

- Easier to understand
- Easier to test
- Easier to modify
- Easier to extend

In the Placement Management System, business responsibilities should be separated instead of placing all logic in one component.

---

# 9. Component Responsibilities

Each component should have one primary responsibility.

## Lightning Web Component (LWC)

Responsibility:
- Collect information from users
- Display data
- Show messages to users

It should not contain complex business decisions.

---

## Apex Service Layer

Responsibility:
- Apply business rules
- Make decisions
- Process business operations

Example:
- Check student eligibility
- Prevent duplicate applications
- Validate deadlines

---

## Salesforce Database

Responsibility:
- Store records
- Maintain application data

Example:
- Student records
- Company records
- Job records
- Application records

---

# 10. Student Application Process Architecture

The application flow is:

Student

↓

Lightning Web Component

↓

Application Service

↓

Eligibility Validation

↓

Salesforce Database

↓

Confirmation to User


Each component performs a separate responsibility.

This separation improves maintainability and reduces confusion.

---

# 11. Apex Service Class Design

## StudentService

Purpose:
Handles student-related operations.

Responsibilities:

- Register students
- Update student information
- Verify academic details
- Check placement status


---

## JobService

Purpose:
Manages job opportunities.

Responsibilities:

- Create job postings
- Update eligibility criteria
- Close expired jobs
- Publish opportunities


---

## ApplicationService

Purpose:
Handles the complete application process.

Responsibilities:

- Receive applications
- Check eligibility
- Prevent duplicate applications
- Save valid applications
- Return meaningful messages


ApplicationService becomes the main business service because applications require multiple decisions.

---

# 12. New Business Requirement Analysis

Requirement:

"Students who already hold two offers cannot apply for additional companies."


## Which service handles this rule?

ApplicationService should implement this rule because it controls the application process.


## When should this rule be checked?

The rule should be checked before saving the application.

Reason:

Invalid applications should never enter the database.


## Which services are affected?

Mainly:

ApplicationService

StudentService may provide offer information, but ApplicationService makes the final decision.


## Future change:

If the company changes the rule from two offers to three offers, only the eligibility rule inside ApplicationService should be modified.

The overall architecture remains unchanged.

---

# 13. Preparing for Apex

Apex is used to convert business design into executable software.

Mapping between design and Apex:

| Business Concept | Apex Implementation |
|---|---|
| Business responsibility | Apex Class |
| Business activity | Apex Method |
| Business information | Variables |
| Multiple records | Collections |
| Retrieve Salesforce data | SOQL |
| Save changes | DML |

---

# 14. Engineering Learnings from Architecture

From this section, I learned:

- Good software starts with good design.
- Every component should have a clear responsibility.
- Business logic should not be mixed with user interface code.
- Apex classes should represent business responsibilities.
- Architecture reduces future maintenance problems.
- Understanding requirements is more important than writing code quickly.


# Conclusion

In Sprint 4, I learned how to think like a software architect.

Before writing Apex code, developers should understand business requirements, identify responsibilities, and design a proper solution.

The Placement Management System architecture separates user interface, business logic, and data storage, making the application scalable and maintainable.


# Section 4.8 – 4.13 Discovering Apex

## 4.8 Discovering Apex

Apex is the programming language used on the Salesforce platform to implement business logic.

Apex helps developers convert business requirements and system designs into executable software.

The correct development approach is:

Business Requirement  
↓  
Business Rules  
↓  
System Design  
↓  
Apex Implementation  

Apex is not something to memorize separately. It is a tool used to express the business solutions that developers have already designed.

---

# 4.9 My First Apex Class

The first business responsibility selected for automation is processing student applications.

The Apex class created for this responsibility is:

ApplicationService


Example:

```apex
public class ApplicationService {

}

An Apex class should represent a specific business responsibility.

ApplicationService represents the responsibility of managing the student application process.

Classes should not be created only because Apex requires them. They should exist because the business has a responsibility that needs to be managed.

4.10 Giving the Service Something to Do

A class becomes useful when it performs business activities through methods.

Example:

public class ApplicationService {

    public void submitApplication(){

    }

}

The method name represents a business activity.

Good method names explain what the system is doing.

Examples:

submitApplication()
approveApplication()
rejectApplication()
withdrawApplication()
viewApplicationHistory()
reopenApplication()

Method names should describe business actions instead of technical operations.

4.11 Understanding Parameters

A method requires information to perform its responsibility.

For submitting a job application, the system requires:

Student Id
Job Id

Example:

public class ApplicationService {

    public void submitApplication(Id studentId, Id jobId){

    }

}

Parameters provide the required information for a method to complete its task.

Good methods should receive only the information that is necessary.

4.12 Returning Results

Every business activity should communicate the outcome of the operation.

Examples:

Successful Result
Application submitted successfully.
Failure Results
CGPA requirement not satisfied.
Application deadline has expired.
Duplicate application detected.
Student already holds maximum permitted offers.

Clear results help users understand what happened after an action.

ApplicationService Possible Methods
Method	Purpose
submitApplication()	Submit a new application
checkEligibility()	Check student eligibility
preventDuplicateApplication()	Prevent duplicate applications
approveApplication()	Approve applications
rejectApplication()	Reject applications
withdrawApplication()	Withdraw applications
viewApplicationHistory()	View previous applications
4.13 Building Before Expanding

Professional developers follow a gradual development approach.

Steps:

Understand the business requirement.
Identify responsibilities.
Design classes.
Define methods.
Identify required parameters.
Decide expected results.
Implement Apex code.

Developers should build small, test frequently, and improve continuously.

The goal of software development is not to write the largest amount of code.

The goal is to build software that remains useful as the business grows.

Sprint Checkpoint
Why does ApplicationService exist?

ApplicationService exists to manage student application-related business decisions and operations.

What business responsibility does it represent?

It represents the responsibility of processing and managing job applications.

Why do we create methods?

Methods represent specific business activities that the software needs to perform.

How do method names reflect business activities?

Method names describe real-world actions performed by the business.

Example:

submitApplication() represents submitting a job application.

Why are parameters required?

Parameters provide the information required by a method to complete its operation.

Example:

Student Id and Job Id are required to process an application.

What should methods communicate after completing their work?

Methods should communicate the result of the operation clearly.

Examples:

Success message
Validation failure
Rejection reason
Engineering Learnings

From this section, I learned:

Apex converts business design into executable software.
Classes should represent business responsibilities.
Methods should represent business activities.
Parameters provide required business information.
Results should clearly communicate decisions.
Good design should always come before coding.
Conclusion

In Section 4.8 – 4.13, I learned how Apex brings software design to life.

The Placement Management System moves from understanding business requirements to implementing business logic using Apex classes and methods.


After pasting this, save `README.md`. Then your next step is creating the **3 Apex Classes (`StudentService`, `JobService`, `ApplicationService`) in Salesforce**.

