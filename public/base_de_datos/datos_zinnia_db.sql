use zinnia_db;
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
                           

insert into user values(0, null,null,'Jaime','Guillen','9191605445','gunsjimmy19@gmail.com','123456','default.png',1,null);

