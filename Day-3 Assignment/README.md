# Salesforce Interview Readiness Bootcamp

## Day 3 Assignment – Validation Rules, Flows & Triggers

## Project: Placement Management System

## Objective

Implemented Salesforce automation using Validation Rules, Record-Triggered Flows, and Apex concepts to improve the Placement Management System.

---

# Part 1 – Interview Warm-up

## 1. What is a Validation Rule?

A Validation Rule is a Salesforce feature used to prevent incorrect data from being saved into the system. It checks a condition using a formula and displays an error message when the condition becomes true.

Example:
Preventing an Application from being submitted after the Job Closing Date.

---

## 2. What is a Flow?

Flow is a Salesforce automation tool used to automate business processes without writing code. It can create records, update fields, send emails, and perform complex logic.

Example:
Automatically setting Application Date when an Application record is created.

---

## 3. What is an Apex Trigger?

An Apex Trigger is a piece of Apex code that executes automatically before or after database operations like insert, update, delete, or undelete.

Example:
Creating an Offer Letter record when an Application status changes to Selected.

---

## 4. When would you choose Flow instead of Trigger?

I choose Flow when the requirement can be solved using declarative automation because it is easier to maintain, requires less code, and can be modified by administrators.

Triggers are preferred for complex logic that cannot be handled by Flow.

---

## 5. Can a Validation Rule update another field? Why or why not?

No. Validation Rules only validate data and prevent incorrect records from saving. They cannot update fields.

For updating fields, we use Flow or Apex Trigger.

---

## 6. Which executes first: Validation Rule, Flow, or Trigger?

Salesforce execution order is complex, but generally:

1. Before-save Flow
2. Before Trigger
3. Validation Rules
4. After Trigger
5. After-save Flow

---

## 7. What is a Record-Triggered Flow?

A Record-Triggered Flow automatically runs when a record is created, updated, or deleted based on defined conditions.

Example:
When a new Application is created, automatically populate Application Date.

---

# Part 2 – Business Scenario

## Requirement Solutions

### 8. Send email whenever student submits application

Solution:
Flow

Reason:
Email notification can be easily automated using Record-Triggered Flow.

---

### 9. Automatically populate Application Date

Solution:
Flow

Reason:
A Before-Save Record-Triggered Flow can update the field automatically.

---

### 10. Prevent duplicate applications

Solution:
Validation Rule / Flow

Reason:
Duplicate rules or validation logic can prevent duplicate records.

---

### 11. Reject students with low CGPA

Solution:
Validation Rule

Reason:
Validation Rules are suitable for checking conditions before saving data.

---

### 12. Create Offer Letter when Status becomes Selected

Solution:
Flow

Reason:
After-Save Flow can automatically create related records.

---

# Part 3 – Design Challenge

| Requirement                   | Solution        | Reason                      |
| ----------------------------- | --------------- | --------------------------- |
| Reject duplicate applications | Validation Rule | Prevents invalid data       |
| Auto-fill Application Date    | Flow            | Updates field automatically |
| Send Email                    | Flow            | Supports email automation   |
| Reject low CGPA               | Validation Rule | Checks business condition   |
| Create Offer Letter record    | Flow            | Creates related records     |

---

# Part 4 – Hands-on Assignment

## Record-Triggered Flow: Application Date Automation

### Flow Process:

Start
↓
Assignment - Set Application Date
↓
Update Application Record
↓
Send Confirmation Email

## Flow Features Implemented:

* Automatically populated Application Date.
* Sent confirmation email notification to Placement Officer.
* Successfully tested with Application record creation.

## Screenshots

### Flow Canvas

(Add Screenshot)

### Start Element

(Add Screenshot)

### Assignment Element

(Add Screenshot)

### Email Action

(Add Screenshot)

### Successful Execution

(Add Screenshot)

---

# Part 5 – Validation Rules

## 1. Student CGPA Validation

Purpose:
Student CGPA should meet Job minimum CGPA requirement.

Formula:

```
Student__r.CGPA__c < Job__r.Minimum_CGPA__c
```

Error Message:

Student CGPA does not meet job requirement.

---

## 2. Application Date Validation

Purpose:
Application Date should not be after Job Closing Date.

Formula:

```
Applied_Date__c > Job__r.Closing_Date__c
```

Error Message:

Application date cannot be after closing date.

---

## 3. Mandatory Fields Validation

Purpose:
Prevent empty required fields.

Formula:

```
ISBLANK(Student__c) || ISBLANK(Job__c)
```

Error Message:

Please fill all mandatory fields.

---

# Part 6 – Flow vs Trigger

| Requirement                  | Solution          | Reason                    |
| ---------------------------- | ----------------- | ------------------------- |
| Update a field automatically | Flow              | Simple automation         |
| Create related record        | Flow              | Easy record creation      |
| Send email notification      | Flow              | Built-in email action     |
| Call external REST API       | Apex Trigger      | Requires code integration |
| Complex calculations         | Apex Trigger      | Better for complex logic  |
| Process 10,000 records       | Apex / Batch Apex | Better scalability        |

---

# Part 7 – Mini Project Enhancement

Implemented:

✅ Record-Triggered Flow for Application Date
✅ Validation Rules for data quality
✅ Automatic Email Notification
✅ Offer Letter automation design

---

# Part 8 – Debugging Challenge

## 19. What problem might occur?

Multiple automations updating the same field can create conflicts and unexpected results.

---

## 20. Could automation repeatedly execute?

Yes. Automation recursion can happen when one automation triggers another automation repeatedly.

---

## 21. How would you redesign?

Use a single automation approach.

Prefer Flow for simple requirements and Apex only for complex logic.

---

# Part 9 – Interview Questions

## 22. Workflow vs Process Builder vs Flow

Workflow Rules are older automation tools with limited functionality.

Process Builder provides more capabilities but is being replaced.

Flow is the recommended Salesforce automation tool.

---

## 23. Why is Flow replacing Workflow Rules?

Flow provides better features, supports complex logic, and can handle multiple automation requirements.

---

## 24. What is Record-Triggered Flow?

A Flow that automatically executes when records are created, updated, or deleted.

---

## 25. Before-Save vs After-Save Flow

Before-Save Flow:
Used for updating fields on the same record.

After-Save Flow:
Used for creating records, sending emails, and updating related records.

---

## 26. When should Apex be preferred?

Apex is preferred when requirements involve complex business logic, integrations, or large data processing.

---

## 27. Can Flow call Apex?

Yes. Flow can call Apex methods using Invocable Apex.

---

## 28. Advantages of Declarative Automation

* Less coding
* Easy maintenance
* Faster development
* Admin friendly

---

## 29. Explain one Flow you built.

I created a Record-Triggered Flow that automatically sets Application Date when a new Application record is created and sends confirmation email notification.

---

## 30. Explain one Validation Rule.

I created a Validation Rule to prevent applications after the Job Closing Date.

---

## 31. Why Flow instead of Apex?

Because the requirement was simple automation and Flow provides an easier, maintainable solution.

---

# Part 10 – Final Design Decisions

## 32. Requirements solved using Flow

* Application Date automation
* Email notification
* Offer Letter creation

---

## 33. Requirements solved using Validation Rules

* CGPA validation
* Date validation
* Mandatory field validation

---

## 34. Requirements requiring Apex

* External API integration
* Complex calculations
* Large data processing

---

## 35. Why these solutions?

I selected declarative tools whenever possible because Salesforce recommends using clicks before code.

---

# Bonus Challenge

## 36. For 5000 applications, what would you use?

Combination of:

* Validation Rules
* Flow
* Apex for complex processing

---

## 37. Which solution scales best?

Bulkified Apex with Batch Apex is best for enterprise-scale processing.

---

## 38. Performance considerations

* Avoid unnecessary automation
* Prevent recursion
* Optimize queries
* Use bulk processing

---

## 39. Enterprise Architecture

Use:

* Flow for simple automation
* Apex Services for complex logic
* Batch Apex for large data
* Integration APIs for external systems

---

# Technologies Used

* Salesforce Lightning Platform
* Flow Builder
* Validation Rules
* Apex Triggers
* Salesforce Objects & Relationships

# Conclusion

This assignment enhanced the Placement Management System by implementing Salesforce automation using Flow and Validation Rules while understanding when Apex Trigger development is required.
