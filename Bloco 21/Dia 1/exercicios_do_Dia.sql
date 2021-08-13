select max(salary) from hr.employees;
select max(salary) - min(salary) from hr.employees;
select JOB_ID, avg(salary) as 'average_salary' from hr.employees group by JOB_ID order by 'average_salary' desc;
select sum(salary) from hr.employees;
select round(max(salary), 2), round(min(salary), 2), round(sum(salary), 2), round(avg(salary), 2) from hr.employees;
select count(JOB_ID) from hr.employees where JOB_ID = 'IT_PROG';
select JOB_ID, sum(salary) from hr.employees group by JOB_ID;
select JOB_ID, sum(salary) from hr.employees group by JOB_ID having JOB_ID = 'IT_PROG';
select JOB_ID, avg(salary) from hr.employees group by JOB_ID having JOB_ID != 'IT_PROG' order by avg(salary) desc;
select department_id, avg(salary) , count(*) from hr.employees group by department_id having count(*) > 10;
-- update hr.employees set phone_number = replace(phone_number, '515', '777') where phone_number like '515%';
select * from hr.employees where LENGTH(first_name) >= 8;
select employee_id, first_name, left(hire_date, 4) from hr.employees;
select employee_id, first_name, right(hire_date, 2) from hr.employees;
select employee_id, first_name, substring(hire_date, 6, 2) from hr.employees;
select upper(concat(first_name, ' ', last_name)) from hr.employees;
select last_name, hire_date from hr.employees where month(hire_date) = 7 and year(hire_date)=1987;
select first_name, last_name, datediff(current_date(), hire_date) from hr.employees;


