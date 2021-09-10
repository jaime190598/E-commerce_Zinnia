create database zinnia_db;
use zinnia_db;

create table clothing_brand (
idclothing_brand int primary key not null auto_increment,
name varchar(75) not null,
description varchar(225)
);
create table  size (
idsize int primary key not null auto_increment,
size varchar(20));


create table category (
idcategory int primary key not null auto_increment,
name varchar(70) not null,
description varchar(225),
status bit);

create table product (
idproduct int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
code varchar(50) not null,
name varchar(100) not null,
sale_price decimal(11,2) not null,
stock int not null,
description varchar(275) not null,
image varchar(150) not null,
status bit,
color varchar(150) not null,
fkidcategory int,
fkidclothing_brand int,
fkidsize int,
constraint fk_category_product foreign key (fkidcategory) references category(idcategory),
constraint fk_clothing_brand_product foreign key (fkidclothing_brand) references clothing_brand(idclothing_brand),
constraint fk_size_product foreign key (fkidsize) references size(idsize)
);

create table rol (
idrol int primary key not null auto_increment,
name varchar(75) not null,
description varchar(225)
);
create table state (
idstate int primary key not null auto_increment,
name varchar(75) not null
);
create table location(
idlocation int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
location varchar(70),
location_maps varchar(120),
cp varchar(6) not null,
fkidstate int not null,
constraint fk_state_location foreign key (fkidstate) references state(idstate)
);
create table provider (
idprovider int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
name varchar(70) not null,
tip_doc varchar(100),
num_doc varchar(100),
telephone varchar(11) unique,
email varchar(100) unique,
fkidlocation int not null,
constraint fk_location_provider foreign key (fkidlocation) references location(idlocation)
);
create table user(
iduser int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
name varchar(100) not null,
last_name varchar(100) not null,
telephone varchar(11),
email varchar(70) not null unique,
password varchar(100) not null,
avatar varchar(100), 
fkidrol int not null,
fkidlocation int,
constraint fk_rol_user foreign key (fkidrol) references rol(idrol),
constraint fk_location_user foreign key (fkidlocation) references location(idlocation)
);
create table entry (
identry int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
type_voucher varchar(100) not null,
voucher_series varchar(70) not null,
voucher_number varchar(70) not null,
date date not null,
tax decimal(11,2) not null,
total decimal(11,2) not null,
fkiduser int not null,
fkidprovider int not null,
constraint fk_user_entry foreign key (fkiduser) references user(iduser),
constraint fk_provider_entry foreign key (fkidprovider) references provider(idprovider)
);
create table entry_detail (
identry_detail int primary key not null auto_increment,
quantity int not null,
price decimal(11,2) not null,
fkidproduct int not null,
fkidentry int not null,
constraint fk_product_entry_detail foreign key (fkidproduct) references product(idproduct),
constraint fk_entry_entry_detail foreign key (fkidentry) references entry(identry)
);
create table shopping_cart(
idshopping_cart int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
fkiduser int not null,
constraint fk_user_shopping_cart foreign key (fkiduser) references user(iduser)
);
create table shopping_cart_detail (
idshopping_cart_detail int primary key not null auto_increment,
cantidad int not null,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
fkidshopping_cart int not null,
fkidproduct int not null,
constraint fk_shopping_cart_shopping_detail foreign key (fkidshopping_cart) references shopping_cart(idshopping_cart),
constraint fk_product_shopping_detail foreign key (fkidproduct) references product(idproduct)
);
create table sale(
idsale int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
type_voucher varchar(100) not null,
voucher_series varchar(70) not null,
voucher_number varchar(70) not null,
date date not null,
tax decimal(11,2) not null,
total decimal(11,2) not null,
fkiduser int not null,
constraint fk_user_sale foreign key (fkiduser) references user(iduser)
);
create table sale_detail(
idsale_detail int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
quantity int not null,
price decimal(11,2),
discount decimal(11,2),
fkidproduct int not null,
fkidsale int not null,
constraint fk_product_sale_detail foreign key (fkidproduct) references product(idproduct),
constraint fk_sale_sale_detail foreign key (fkidsale) references sale(idsale)
);

insert into clothing_brand values (0, 'Adidas','Adidas es el segundo mayor fabricante del rubro después de Nike y una de las marcas que mayor patrocinio a eventos y figuras deportivas (y de otros campos) ha ofrecido a lo largo de los años.'),
(0, 'Aéropostale','Irma estadounidense de moda juvenil/casual muy popular en México, donde está presente por acuerdos de licencia; así como en Asia, Europa, Latinoamérica y Oriente Medio.'),
(0, 'Andrea','Marca 100% mexicana fundada en 1973, es una prestigiosa firma de diseño de moda y calzado enfocada a la venta por catálogo.'),
(0, 'Benetton','Benetton Group S.p.A. es una empresa de moda fundada en Ponzano Veneto, Italia, cuyo negocio principal es la ropa.'),
(0, 'Bershka','Esta es una cadena minorista de moda que pertenece al grupo español Inditex.');

insert into size values (0,'XXS'),(0,'XS'),(0,'S'),(0,'M'),(0,'L'),(0,'XL'),(0,'XXL'),(0,'XXXL'),(0,'Estándar');

insert into category values(0,'Tops|Camisas','De cualquier tipo de uso general', 1),
						   (0,'Pantalones|Jeans','De vestir, de tela gruesa o delgada', 1),
                           (0,'Vestidos|Faldas','Largos, cortos, con o sin pliegues', 1),
                            (0,'Abrigos|Trench','De cuero, a la medida', 1),
                             (0,'Pijamas','Para todas las edades, de diferentes diseños', 1),
                              (0,'Accesorios','Relojeria, cadenas, pulsos, medallas, gargantillas', 1),
                               (0,'Verano','Ropa de moda verano', 1),
                                (0,'Primavera','Ropa casual para Primavera', 1),
                                 (0,'Otoño','Ropa casual para Otoño', 1),
                                  (0,'Invierno','Ropa casual para Invierno', 1),
                                  (0,'Lo más vendido','los mas vendidos de todas sus categorias', 1),
                                  (0,'Ofertas','ofertas de todos los productos', 1);

insert into product values(0,null, null,'05SDFG124','Camisa corte V',110.99,4,'camisa de corte en v, manga larga, con estampados','camisa_v.png',1,'red',1,2,2),
						  (0,null, null,'05SDFG123','Top corte V',120.99,4,'Top de corte en v, manga larga, con estampados','top.png',1,'blue',1,3,3),
                          (0,null, null,'05SDFG121','Pantalon vestir',310.99,4,'Pantalon, tea lisa, con lineas','pantalon.png',1,'cafe',2,2,1),
						  (0,null, null,'05SDFG122','Jeans vaquero',220.99,4,'Jeans tela gruesa corte vaquero','jeans_v.png',1,'azul',2,3,5),
						  (0,null, null,'05SDFG124','Reloj Diamont',1120.99,4,'Metalico, corte diamante, cristal, bateria solar','reloj.png',1,'dorado',6,1,9),
						  (0,null, null,'05SDFG124','Pulso canon',900.99,4,'De oro de 15 kilates, trenzado','pulso.png',1,'plateado',6,1,9);

insert into rol values (0,'administrador','administrador de aplicacion'),
						   (0,'general','usuario de compra en linea'),
                           (0,'proveedor','proveedor de productos');
                           
/*contraseña:123456*/
insert into user values(0, null,null,'Jaime','Guillen','9191605445','gunsjimmy19@gmail.com','$10$Dl3oJfNpEjB.NT.pki7eUu99kmg//q1Du4Kiri5j.Sj0eGLLYTQ3y','newUsers.png',1,null);
insert into user values(0, null,null,'Jaime','Guillen','9191605445','guns@gmail.com','$10$Dl3oJfNpEjB.NT.pki7eUu99kmg//q1Du4Kiri5j.Sj0eGLLYTQ3y','newUsers.png',2,null);
