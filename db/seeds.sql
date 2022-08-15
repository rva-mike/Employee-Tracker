USE employee_db;

INSERT INTO department (department_name)
VALUES ("Development");
INSERT INTO department (department_name)
VALUES ("Marketing");
INSERT INTO department (department_name)
VALUES ("Finance");
INSERT INTO department (department_name)
VALUES ("HR");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Front-End Developer", 50000, 1);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Back-End Developer", 60000, 1);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Marketing Manager", 45000, 2);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Accountant", 60000, 3);
INSERT INTO employee_role (title, salary, department_id)
VALUES ("HR Coordinator", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Levy", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jone", "Doe", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Gates", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elon", "Musk", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gary", "Edmond", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("George", "Washington", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Megan", "Adams", 1, 2);
