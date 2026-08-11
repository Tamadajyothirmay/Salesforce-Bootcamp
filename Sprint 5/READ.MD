# Chapter 5 – Making Software Talk to Data

## Sprint 5 – Retrieving and Managing Information with SOQL and DML

### Placement Management System – Salesforce

> **"Business decisions are only as good as the information available to make them."**

---

## 🎯 Sprint Objective

The objective of Sprint 5 was to understand how Salesforce applications retrieve and manage information before making business decisions.

In the previous sprint, the Placement Management System learned how to apply business rules and validate applications. In this sprint, the system learned how to communicate with Salesforce data using:

* **SOQL (Salesforce Object Query Language)**
* **DML (Data Manipulation Language)**
* **Apex**

The practical implementation focused on retrieving Student, Job, and Application records and using that information to make placement-related decisions.

---

## 📚 Learning Outcomes

By completing this sprint, I learned how to:

* Understand why software must retrieve data before making decisions.
* Understand the role of SOQL in Salesforce applications.
* Retrieve Salesforce records using Apex and SOQL.
* Create Salesforce records using DML.
* Update existing Salesforce records using DML.
* Check existing records before performing business operations.
* Use retrieved information in business logic.
* Understand data as a business asset.
* Write readable and reusable data-access code.
* Work confidently with Salesforce records using Apex.

---

# 5.1 Data Is Not Just Data

In a Placement Management System, data represents important business information.

For example:

### Student

A Student record contains information such as:

* Name
* CGPA
* Department
* Academic details

This information helps determine whether a student is eligible for a particular job.

### Job

A Job record contains information such as:

* Job Name
* Company
* Last Application Date
* Eligible Department
* Minimum CGPA
* Minimum Year
* Maximum Active Backlogs

This information defines the eligibility and application conditions for a job.

### Application

An Application record represents the relationship between a student and a job.

It contains information such as:

* Student
* Job
* Application Status
* Applied Date

Therefore, the application process requires information from multiple Salesforce objects before a decision can be made.

---

# 5.2 Asking the Database Questions

## What is SOQL?

**SOQL (Salesforce Object Query Language)** is used to retrieve records and fields from Salesforce objects.

SOQL can be thought of as asking Salesforce a specific business question.

For example:

> "What is this student's CGPA and department?"

The corresponding Apex SOQL query retrieves that information.

---

## Student SOQL Query

The Student record was retrieved using:

```apex
Student__c student = [
    SELECT Id, Name, CGPA__c, Department__c
    FROM Student__c
    WHERE Id = :studentId
];
```

This query retrieves:

* Student ID
* Student Name
* CGPA
* Department

---

## Job SOQL Query

The Job record was retrieved using:

```apex
Job__c job = [
    SELECT Id, Name, Company__c, Last_Date__c,
           Eligible_Department__c, Minimum_CGPA__c
    FROM Job__c
    WHERE Id = :jobId
];
```

This query retrieves:

* Job Name
* Company
* Last Application Date
* Eligible Department
* Minimum CGPA

---

## Application SOQL Query

SOQL was also used to determine whether a student had already applied for a particular job.

```apex
List<Application__c> applications = [
    SELECT Id, Name, Student__c, Job__c,
           Status__c, Applied_Date__c
    FROM Application__c
    WHERE Student__c = :studentId
    AND Job__c = :jobId
];
```

This query helps the system identify duplicate applications.

---

# 5.3 Every Query Should Answer One Business Question

During the practical implementation, each query was connected to a specific business requirement.

| Business Question                        | Salesforce Object | Information Retrieved                        |
| ---------------------------------------- | ----------------- | -------------------------------------------- |
| What are the student's academic details? | `Student__c`      | Name, CGPA, Department                       |
| What are the job requirements?           | `Job__c`          | Company, Last Date, Minimum CGPA, Department |
| Has the student already applied?         | `Application__c`  | Existing application and status              |
| What is the application status?          | `Application__c`  | Status, Applied Date                         |

This demonstrates the principle:

> **Retrieve first. Decide afterwards.**

---

# 5.4 DML – Managing Salesforce Records

## What is DML?

**DML (Data Manipulation Language)** is used in Apex to modify Salesforce records.

The main DML operations include:

* `insert` – Create a record
* `update` – Modify an existing record
* `delete` – Delete a record
* `upsert` – Create or update a record

In this sprint, `insert` and `update` were practically demonstrated.

---

# 5.5 Creating an Application Using DML

An Application record was created using the `insert` operation.

```apex
Application__c app = new Application__c();

app.Student__c = studentId;
app.Job__c = jobId;
app.Status__c = 'Applied';
app.Applied_Date__c = Date.today();

insert app;
```

This demonstrates how Apex can create a Salesforce record programmatically.

During testing, Salesforce detected that the student had already applied for the selected job.

The system displayed:

```text
You have already applied for this job.
```

This confirmed that the existing duplicate-application business rule was working correctly.

---

# 5.6 Updating an Application

An existing Application record was retrieved and updated using DML.

```apex
Application__c app = [
    SELECT Id, Status__c
    FROM Application__c
    WHERE Student__c = :studentId
    AND Job__c = :jobId
    LIMIT 1
];

app.Status__c = 'Selected';

update app;
```

The Application status was successfully changed from:

```text
Applied
```

to:

```text
Selected
```

The update was then verified using SOQL.

---

# 5.7 End-to-End Business Logic

The final practical implementation combined **SOQL, business logic, and DML**.

The process was:

```text
Student applies for a Job
        ↓
Retrieve Student using SOQL
        ↓
Retrieve Job using SOQL
        ↓
Check Application Deadline
        ↓
Check Existing Applications
        ↓
Make Business Decision
        ↓
Create/Update Application using DML
```

For the tested Wipro Backend Developer job:

* **Student ID:** `a03hg00000A1MrxAAF`
* **Job ID:** `a01hg000007PUkDAAW`
* **Company:** Wipro
* **Job:** Backend Developer
* **Application Last Date:** 29 August 2026
* **Minimum CGPA:** 7.00
* **Eligible Department:** CSE
* **Minimum Year:** 4th Year
* **Maximum Backlogs:** 0

The system successfully retrieved the required information and detected the existing application.

---

# 🧪 Practical Tasks Completed

| Task                                  | Result      |
| ------------------------------------- | ----------- |
| Retrieve Student using SOQL           | ✅ Completed |
| Retrieve Job using SOQL               | ✅ Completed |
| Retrieve Application using SOQL       | ✅ Completed |
| Check duplicate application           | ✅ Completed |
| Create Application using `insert`     | ✅ Tested    |
| Duplicate application validation      | ✅ Verified  |
| Update Application using `update`     | ✅ Completed |
| Verify updated Application using SOQL | ✅ Completed |
| Combine SOQL + Business Logic + DML   | ✅ Completed |

---

# 📸 Screenshots

The following screenshots were captured during the practical implementation:

1. Student SOQL query and output
2. Job SOQL query and output
3. Application SOQL query
4. Duplicate application detection
5. DML insert and duplicate validation result
6. Application update using DML
7. SOQL verification of updated status
8. Final SOQL + DML business logic

---

# 💡 Engineering Insight

The most important lesson from Sprint 5 was:

> **Software cannot make good decisions without first finding the right information.**

SOQL allows the Placement Management System to retrieve the information it needs, while DML allows the system to create and update Salesforce records.

The overall pattern learned in this sprint is:

```text
SOQL
  ↓
Retrieve Information
  ↓
Business Logic
  ↓
Decision
  ↓
DML
  ↓
Create / Update Record
```

---

# 🎓 Chapter Reflection

Through this sprint, I learned that SOQL is not simply a syntax to memorize. Every query should answer a specific business question.

I also learned that Salesforce applications must retrieve accurate information before making business decisions. DML then allows the application to persist those decisions by creating or updating records.

This sprint improved my practical understanding of **Apex, SOQL, DML, Salesforce records, and data-driven business logic**.
