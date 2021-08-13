select * from sakila.customer;

select * from sakila.customer where email='LEONARD.SCHOFIELD@sakilacustomer.org';

select * from sakila.customer where active = 0 and store_id = 2 and first_name <> 'KENNETH' order by first_name asc, last_name asc;

select title, description, release_year, replacement_cost from sakila.film where rating <> 'NC-17' and replacement_cost > 18 order by replacement_cost desc, title asc limit 100;

SELECT COUNT(first_name) FROM sakila.customer WHERE active = 1 AND store_id = 1;

select * from sakila.film where rating='NC-17' order by rental_rate asc, title asc limit 50;