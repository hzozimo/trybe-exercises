-- select * from Books_Lent;
-- select * from Books;
-- select Id, Title from Books as b where not exists (select * from Books_Lent as bl where b.Id = bl.book_id );
-- select Id, Title from Books as b where exists (select * from Books_Lent as bl where b.Id = bl.book_id and bl.returned = 0 and b.Title like "%lost%");
select * from CarSales;
select * from Customers;
select * from Cars;

-- select `Name` from Customers as c where not exists (select * from CarSales as cs where c.CustomerID = cs.CustomerID);
select cliente.name as 'cliente', car.name as 'carro' from Cars as car inner join Customers as cliente where exists (select * from CarSales as cs where cliente.CustomerId = cs.CustomerID and car.Id = cs.CarID);
select cliente.name as 'cliente', car.name as 'carro' from Cars as car inner join Customers as cliente inner join CarSales as cs on cliente.CustomerId = cs.CustomerID and car.Id = cs.CarID;

