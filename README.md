# employee-creator
This project is employee creator in React + TS using spring framework as backend. 
This project has 3 endpoints:
  - Create an employee
  - Get a list of existing employees
  - To delete an employee
The list of employees is a local MySql database

# Frontend
- Vite with react-ts
- SCSS
- React Query for API calls
- React Form Hook for form validation & submission
- Used HTML attributes to required / validate fields before writing your own validation

# Backend
  Dependencies
    - Spring Web,
    - Validation I/O
    - Spring Testing
    - Spring Data JPA
    - MySQL Driver
    - Spring Devtools
    
# application.properties starter:
- spring.datasource.url=jdbc:mysql://localhost:3306/<db_name>
- spring.datasource.username= <username>
- spring.datasource.password= <Your Password>
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect
- spring.jpa.generate-ddl=true


# Under Development:

- Implementing in react redux.
- Implementing an API logging strategy.
- Implementing error handling strategy.
- Frontend and Backend hosting.
