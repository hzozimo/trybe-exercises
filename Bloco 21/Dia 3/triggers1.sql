use betrybe_automoveis
delimiter $$

create trigger gatilho_inserir_carros 
	before insert on carros
    for each row
begin
	set new.data_atualizacao = now(),
    new.acao = 'INSERÇÃO',
    new.disponivel_em_estoque = 1;	
end $$
delimiter ;

--
insert into carros(preco) values('500');
select * from carros;