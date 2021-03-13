USE employee_DB;

/*** Add sample department data **/
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("HR");

/*** Add sample role data **/
INSERT INTO role (title, salary, department_id)
VALUES ("Software", 170000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Business Development", 150000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Comptroller", 125000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Recruiter", 80000.00, 4);

/*** Add a manager to employee table **/
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1);

/*** Add an employee to employee table **/
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 1);

/*** Add an title to role table **/
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 1);