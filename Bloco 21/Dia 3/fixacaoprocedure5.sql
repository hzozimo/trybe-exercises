use sakila;
delimiter $$

create function ExibirTotalDePagamentos(clienteId INT)
returns int reads sql data
begin
	declare total INT;
    select count(*) into total from sakila.payment where customer_id = clienteId;
    return total;
end $$

delimiter ;