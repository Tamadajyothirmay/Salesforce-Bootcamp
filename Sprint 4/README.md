
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
