create database zinia_db;
use zinia_db;

create table clothing_brand (
idclothing_brand int primary key not null auto_increment,
name varchar(75) not null,
description varchar(225)
);
create table  size (
idsize int primary key not null auto_increment,
size varchar(20));

create table color (
idcolor int primary key not null auto_increment,
name varchar(70) not null,
description varchar(225)
);
create table category (
idcategory int primary key not null auto_increment,
name varchar(70) not null,
description varchar(225),
status bit);

create table product (
idproduct int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
update_at timestamp NULL DEFAULT NULL,
code varchar(50) not null,
name varchar(100) not null,
sale_price decimal(11,2) not null,
stock int not null,
description varchar(275) not null,
image varchar(150) not null,
status bit,
fkidcategory int,
fkidclothing_brand int,
fkidsize int,
fkidcolor int,
constraint fk_category_product foreign key (fkidcategory) references category(idcategory),
constraint fk_clothing_brand_product foreign key (fkidclothing_brand) references clothing_brand(idclothing_brand),
constraint fk_size_product foreign key (fkidsize) references size(idsize),
constraint fk_color_product foreign key (fkidcolor) references color(idcolor)
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
update_at timestamp NULL DEFAULT NULL,
location varchar(70),
location_maps varchar(120),
cp varchar(6) not null,
fkidstate int not null,
constraint fk_state_location foreign key (fkidstate) references state(idstate)
);
create table provider (
idprovider int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
update_at timestamp NULL DEFAULT NULL,
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
update_at timestamp NULL DEFAULT NULL,
name varchar(100) not null,
last_name varchar(100) not null,
telephone varchar(11) not null unique,
email varchar(70) not null unique,
password varchar(100) not null,
avatar varchar(100) not null, 
fkidrol int not null,
fkidlocation int,
constraint fk_rol_user foreign key (fkidrol) references rol(idrol),
constraint fk_location_user foreign key (fkidlocation) references location(idlocation)
);
create table entry (
identry int primary key not null auto_increment,
created_at timestamp NULL DEFAULT NULL,
update_at timestamp NULL DEFAULT NULL,
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
