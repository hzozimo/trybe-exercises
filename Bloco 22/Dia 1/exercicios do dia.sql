DROP SCHEMA IF EXISTS zoologico;
create schema if not exists zoologico;
use zoologico;

create table animal(
animal_id int primary key auto_increment,
nome varchar(100) not null,
especie varchar(100) not null,
sexo varchar(50) not null,
idade int not null,
localização varchar(100) not null
);

create table gerente(
gerente_id int primary key auto_increment,
nome varchar(100) not null
);

create table cuidador(
cuidador_id int primary key auto_increment,
nome varchar(100) not null,
gerente_id int not null,
foreign key(gerente_id) references gerente (gerente_id)
);

create table animal_cuidador(
animal_id int not null,
cuidador_id int not null,
foreign key (animal_id) references animal (animal_id),
foreign key (cuidador_id) references cuidador(cuidador_id)
);