SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1 , 2 , 3;

SELECT 10 + 15;

SELECT 2/2;

SELECT * FROM Scientists.Scientists;

SELECT Name as 'Nome do Projeto', Hours as 'Tempo de Trabalho' from Scientists.Projects;

select Name from Scientists.Scientists order by Name ASC;

select Name from Scientists.Projects order by Name desc;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') from Scientists.Projects;

select name, hours from Scientists.Projects order by hours desc limit 3;

select distinct code from Scientists.Projects;

select name from Scientists.Projects order by hours desc limit 1;

select name from Scientists.Projects order by hours desc limit 1 offset 1;

select name from Scientists.Projects order by hours asc limit 1 offset 1;

select * from Scientists.Projects order by hours asc limit 5;

SELECT CONCAT('Existem', count(Name), ' cientistas na tabela Scientists.') from Scientists.Scientists;