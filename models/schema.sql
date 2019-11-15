DROP DATABASE IF EXISTS theMentor_db;
CREATE DATABASE theMentor_db;

DROP DATABASE IF EXISTS theMentor_test_db;
CREATE DATABASE theMentor_test_db;

USE theMentor_db;

CREATE TABLE department(
    depid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DepartmentName VARCHAR(255),
    
);

CREATE TABLE employee(
    empid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Firstname VARCHAR(255),
    Lastname VARCHAR(255),
    Username VARCHAR(255),
    EmailAddress VARCHAR(255),
    DepartmentName VARCHAR(255),
    FOREIGN KEY (DepartmentName) REFERENCES department (DepartmentName)
);



