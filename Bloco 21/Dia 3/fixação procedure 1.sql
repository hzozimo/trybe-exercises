use sakila;
delimiter $$

create procedure ExibeDezAtoresMaisPopulares()
begin
	select actor_id, count(film_id) from film_actor group by actor_id order by count(film_id) desc limit 10;
end $$

delimiter ;