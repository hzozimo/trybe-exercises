use sakila;
delimiter $$

create function ExibeQuantidadeDeFilmesNaCategoria(categoria varchar(100))
returns int reads sql data
begin
	declare quantidade int;
    select count(*) into quantidade from sakila.category as c inner join sakila.film_category as fc on fc.category_id = c.category_id where c.name = categoria;
    return quantidade;
end $$

delimiter ;
