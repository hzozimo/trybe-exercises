use sakila;
delimiter $$

create function RetornaNomeFilme(id int)
returns varchar(100) reads sql data
begin
	declare titulo varchar(100);
    select title into titulo from sakila.inventory as i inner join sakila.film as f on f.film_id = i.film_id where i.inventory_id = id;
    return titulo;
end $$

delimiter ;