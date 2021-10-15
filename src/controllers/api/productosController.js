const db = require("../../database/models");
const fs = require('fs');
const { group } = require("console");


const controlador = {
    products: (req, res) => {
        db.Product.findAll({ include: [{ association: "category" }] })
            .then(products => {
                let dataProducts = [];
                var categorys = [];

                products.map(product => {
                    let miProduct = product.dataValues;
                    delete miProduct['code']
                    delete miProduct['sale_price']
                    delete miProduct['stock']
                    delete miProduct['image']
                    delete miProduct['status']
                    delete miProduct['color']
                    var category = miProduct.category.dataValues.name

                    if (categorys.length > 0) {

                        var repetido = 0;
                        for (var i = 0; i < categorys.length; i++) {

                            if (categorys[i].category == category) {
                                categorys[i].count += 1;
                               
                                repetido = 1;
                            }
                        }
                        if (repetido == 0) {
                            
                            categorys.push({ count: 1, category })
                            repetido = 0;
                        }
                    } else {
                        
                        categorys.push({ count: 1, category })
                    }


                    miProduct={...miProduct,urlDetails:'http://localhost:3000/api/products/detail/'+product.dataValues.idproduct}
                    dataProducts.push(miProduct);
                })

                 console.log(dataProducts[0].category.dataValues) 
                 let respuesta={ 
                     meta:{
                     status : 200,
                     count: products.length,
                     countByCategory: categorys,
                     url:'api/products'
                 },
                 data:dataProducts
             }  
                res.json(respuesta);
            })
    },
     productDetail:(req,res)=>{
        db.Product.findByPk(req.params.id,{ include: [{ association: "category" },{association:"clothing_brand"},{association:"size"}] })
        .then(product => {
            let dataProducts = [];
            
                let miProduct = product.dataValues;
                miProduct={...miProduct,urlImage:'http://localhost:3000/api/products/image/'+product.dataValues.image}
                dataProducts.push(miProduct);
           

                 let respuesta={ 
                     meta:{
                     status : 200,
                     url:'api/products'
                 },
                 data:dataProducts}
                 res.json(respuesta);
        })
      },
      image:(req,res)=>{
        let img= req.params.img
        res.render('./external/image-product',{img})
    }
     
}
module.exports = controlador;