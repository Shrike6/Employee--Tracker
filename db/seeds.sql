-- seeding data into tables
INSERT INTO department (id, names)
VALUES (001, 'Sales'),
       (002, 'Engineering'),
       (003, 'Finance'),
       (004, 'Legal');
       
INSERT INTO roles (department_id, title, salary)
VALUES  (001,'Salesperson', 105000),
        (002,'Lead Engineer', 145000),
        (002,'Software Engineer', 95000),
        (003,'Account Manager', 130000),
        (003,'Accountant', 75000),
        (004,'Legal Team Lead', 270000),
        (004, 'Lawyer', 220000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Leanne', 'Stubblefield', 003, null),
        ('Brady', 'Stubblefield', 001, 002),
        ('Colin', 'Stubblefield', 001, null),
        ('Cody', 'Stubblefield', 001, 001),
        ('Clay', 'Stubblefield', 004, 003),
        ('Heather', 'Stubblefield', 001, 004 );