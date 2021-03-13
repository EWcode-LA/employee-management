DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

-- Create three tables

-- department 
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (ID)
);
-- roles
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    references department(id)
);
-- employees
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    references role(id)
);
-- Error 1824 :Failed to open the referenced table 'manager'
-- CREATE TABLE manager(
-- manager_id INT NOT NULL,
-- FOREIGN KEY (manager_id) 
-- references employee(employee_id),
-- PRIMARY KEY (manager_id)
-- );