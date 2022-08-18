USE employee_db;

INSERT INTO department (department_name)
VALUES ("Development"),
("Marketing"),
("Finance"),
("HR"),
("Research")
;

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Front-End Developer", 50000, 1),
 ("Back-End Developer", 60000, 1),
 ("Marketing Manager", 45000, 2),
 ("Accountant", 60000, 3),
 ("HR Coordinator", 50000, 4),
 ("Data Analyst", 55000, 5)
 ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Levy", 1, null),
 ("Jone", "Doe", 2, 1),
 ("Jane", "Doe", 3, 2),
 ("Bill", "Gates", 4, 1),
 ("Elon", "Musk", 5, null),
 ("Gary", "Edmond", 2, null),
 ("George", "Washington", 1, null),
 ("Megan", "Adams", 6, 1)
 ;