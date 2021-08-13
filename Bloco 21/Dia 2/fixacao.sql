select a.actor_id, a.first_name, a.last_name, f.film_id from sakila.actor as a inner join sakila.film_actor as f on a.actor_id = f.actor_id;
select sta.first_name, sta.last_name, adr.address from sakila.staff as sta inner join sakila.address as adr on sta.address_id = adr.address_id;
select cus.customer_id, cus.first_name, cus.last_name, cus.email, cus.address_id, adr.address from sakila.customer as cus inner join sakila.address as adr on cus.address_id = adr.address_id order by cus.customer_id desc;
