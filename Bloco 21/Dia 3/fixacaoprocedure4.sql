use sakila;
delimiter $$

create procedure ExibeDadosDeFilme(in nameInput varchar(100))
begin
	select f.film_id, f.title, fc.category_id, c.name from film as f  inner join film_category as fc on f.film_id = fc.film_id inner join category as c on c.category_id = fc.category_id where c.name = nameInput;
end $$

delimiter ;

