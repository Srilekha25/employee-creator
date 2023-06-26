# employee-creator

![Landing Page](Images/landing_page.png)
![PI_Section](Images/PI_Section.png)
![CD_Section](Images/CD_Section.png)
![ES_Section](Images/ES_Section.png)

# Overview
To create web application which can create list, modify and delete employees. The application should consist of a spring RESTful API and a React Typescript frontend. The schema for the employee is left to the criteria of the candidate.

# MVP
* This project is employee creator in React + TS as frontend and spring framework as backend. 
* This project has 3 endpoints:
  1. Create an employee.
  2. Get a list of existing employees.
  3. To delete an employee.
* The list of employees is a local MySql database.
* Implementing an API logging strategy.
* Implementing error handling strategy.

# Build Steps
```
cd employee-creator
npm install
npm run dev
```

# Frontend
- Vite with react-ts
- SCSS
- React Query for API calls
- React Form Hook for form validation & submission
- HTML attributes to required / validate fields before writing your own validation

# Backend

* Backend Dependencies
    - Spring Web,
    - Validation I/O
    - Spring Testing
    - Spring Data JPA
    - MySQL Driver
    - Spring Devtools

* application.properties starter:
- spring.datasource.url=jdbc:mysql://localhost:3306/<db_name>
- spring.datasource.username= <username>
- spring.datasource.password= <Your Password>
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
- spring.jpa.generate-ddl=true

# Design Goals

The Design is simple which shows the employee details and enables users to perform CRUD Operations.

# Approach
* Started by implementing the backend with POST, GET, PATCH and DELETE operations.
* For frontend, implemented landing page with employees List.
* Created a form with validations for Adding employee and editing Employee.
* Added error messages for required fields.
* Implemented delete functionality at the landing page.

# Features
* Implementing backend with POST, GET, PATCH and DELETE operations. 
* Implementing the front end to display the results. The Landing Page shows    all the employees present in the Database. The Landing Page also contains a button to Add Employee, Edit and Delete an Employee.
* By Clicking on "Add Employee" button, a form is displayed to enter the employee details. If the required fields are left, an error message "This field is required" is displayed to let the user know.
* A back button will on clicking takes back to lading page and the new employee details will be shown automatically.
* By Cliking the edit button, a form with employee details is displayed. The user can edit the details and submit.
* By clicking on the Delete button, the employee is deleted and automatically removed from the page.

# Challenges

* The challenging part for this project is organising start date, end date and ongoing check box with each other as the input of dates is taken from 3 input fields for day, month and year. I struggled with combining the dates and passing as single date onject to backend.

# Known Issues
* When edit is clicked the start date and end date values are not displayed in the form.

# Under Development:

- Implementing in react redux.
- Implementing an API logging strategy.
- Implementing error handling strategy.
- Frontend and Backend hosting.

# Log
* 26/06/2023 - Updated Readme.