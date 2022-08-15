USE employee_db;

INSERT INTO department (department_name)
VALUES ("Development"),
("Marketing"),
("Finance"),
("HR")
;

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Front-End Developer", 50000, 1),
 ("Back-End Developer", 60000, 1),
 ("Marketing Manager", 45000, 2),
 ("Accountant", 60000, 3),
 ("HR Coordinator", 250000, 4)
 ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Levy", 1, 3),
 ("Jone", "Doe", 2, 1),
 ("Jane", "Doe", 3, null),
 ("Bill", "Gates", 4, 3),
 ("Elon", "Musk", 5, null),

 ("Gary", "Edmond", 2, null),
 ("George", "Washington", 4, 7),
 ("Megan", "Adams", 1, 2)
 ;