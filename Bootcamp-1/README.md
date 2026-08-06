# Salesforce Placement Management System

## Project Overview

A Salesforce-based Placement Management System developed to automate student job applications using Apex Triggers, SOQL, and Salesforce Objects.

The system manages Students, Jobs, and Applications while enforcing placement business rules.

---

## Objects Used

### Student__c

Stores student details:

- Name
- Email
- CGPA
- Department
- Year
- Phone


### Job__c

Stores job details:

- Company
- Minimum CGPA
- Last Date
- Package
- Location


### Application__c

Stores student job applications:

- Student
- Job
- Applied Date
- Status


---

## Why did you choose a Trigger?

Apex Trigger was chosen because the requirements involve complex business logic across multiple objects.

Examples:

- Checking Student CGPA against Job minimum CGPA
- Preventing duplicate applications
- Validating application deadline


---

## Why Before Insert Trigger?

Before Insert Trigger is used because:

- Data needs validation before saving.
- Status field needs to be automatically populated.
- Error messages can prevent invalid records.


---

## Trigger Features

### 1. CGPA Validation

Students cannot apply for jobs if their CGPA is below the required CGPA.


### 2. Duplicate Prevention

A student cannot apply for the same job multiple times.


### 3. Last Date Validation

Applications cannot be submitted after the job deadline.


### 4. Default Status

Every new application automatically receives:
Status = Applied



---

## Bulkification

The trigger is bulkified by:

- Using Sets to collect record IDs.
- Using Maps for fast record access.
- Performing SOQL queries outside loops.
- Avoiding DML statements inside loops.


The trigger can handle multiple records uploaded at the same time.


---

## Collections Used

### List

Stores multiple records.

Example:

Trigger.new


### Set

Stores unique IDs.

Used for:

- Student IDs
- Job IDs


### Map

Stores key-value pairs.

Used for:

- Student records
- Job records


---

## Learning Outcomes

Through this assignment I learned:

- Apex Triggers
- Trigger Context Variables
- SOQL Queries
- Governor Limits
- Bulkification
- Salesforce Collections
- Error Handling using addError()
