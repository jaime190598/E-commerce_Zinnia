const db = require("../../database/models");
const fs = require('fs');
const { group } = require("console");


const controlador = {
    products: (req, res) => {
        var categorys=[];
        db.Category.findAll()
        .then(dbCategorys=>{
            dbCategorys.map(cat=>{
             let categoryObj={name:cat.dataValues.name, count:0};
             categorys.push(categoryObj);
            })
             
        db.Product.findAll({ include: [{ association: "category" }] })
            .then(products => {
                let dataProducts = [];
                
                products.map(product => {
                    let miProduct = product.dataValues;
                    delete miProduct['code']
                   /*  delete miProduct['sale_price'] */
                    delete miProduct['stock']
                    delete miProduct['image']
                    delete miProduct['status']
                    delete miProduct['color']
                    var category = miProduct.category.dataValues.name
                    
                    if (categorys.length > 0) {

                        for (var i = 0; i < categorys.length; i++) {

                            if (categorys[i].name == category) {
                                categorys[i].count += 1;
                               
                            }
                        }
                        
                    } 


                    miProduct={...miProduct,urlDetails:'http://localhost:3001/api/products/detail/'+product.dataValues.idproduct}
                    dataProducts.push(miProduct);
                })

                 console.log(dataProducts[0].category.dataValues) 
                 let respuesta={ 
                     meta:{
                     status : 200,
                     count: products.length,
                     countByCategory: categorys,
                     countCategory:dbCategorys.length,
                     url:'api/products'
                 },
                 data:dataProducts
             }  
                res.json(respuesta);
            })
        })
            console.log(categorys)
    },
     productDetail:(req,res)=>{
        db.Product.findByPk(req.params.id,{ include: [{ association: "category" },{association:"clothing_brand"},{association:"size"}] })
        .then(product => {
            let dataProducts = [];
            
                let miProduct = product.dataValues;
                miProduct={...miProduct,urlImage:'http://localhost:3001/api/products/image/'+product.dataValues.image}
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