
const db = require("../database/models")
const fs = require('fs');
const path = require('path');

const controlador = {
    productos: (req, res)=>{
        const title='Mis Products';
        let paginado=2;
      db.Product.findAll({
        limit:paginado
      }).then(result=>{
        res.render('listProducts',{products:result, title:title,paginado,off:paginado});
      })
    },
    paginado:(req,res)=>{
      console.log(req.params.off)
       let limite=parseInt(req.params.pag);
       let pagina=parseInt(req.params.off);
       let paginaTotal=limite+pagina;
       const title='Mis Products';
       /* console.log(pagina) */
       db.Product.findAll({
         offset:pagina,
        limit:limite
      }).then(result=>{
        res.render('listProducts',{products:result, title:title,paginado:limite,off:paginaTotal});
      })
    },
    searchlist:(req,res)=>{
      const title='Mis Products';
      let paginado=2;
        db.Product.findAll({
          where:{
            name:{[db.Sequelize.Op.substring] : req.body.search}
          }
        }).then(result=>{
          /* console.log(result) */
          res.render('listProducts',{products:result, title:title,paginado,off:paginado});
        }).catch(error=>{
          res.status(404).render('404-page');
        })
    },
    searchProduct:(req,res)=>{
      const title='Mis Products';
        db.Product.findAll({
          where:{
            name:{[db.Sequelize.Op.substring] : req.body.search}
          },
          include:[{association:"category"},{association:"clothing_brand"},{association:"size"}]
        }).then(products=>{
          /* console.log(products) */
          res.render('products',{products:products, title:title});
        }).catch(error=>{
          res.status(404).render('404-page');
        })
    },
    categorys_clothes: (req, res)=>{
        console.log(req.params.id);
        db.Product.findAll({
            where: {
                fkidcategory:{[db.Sequelize.Op.eq] : req.params.id}
            },
            include:[{association:"category"},{association:"clothing_brand"},{association:"size"}]
        }).then(products=>{
            //return res.send(products);
            res.render('products',{products, title:products[0].category.name});
          }).catch(error=>{
            res.render('products',{products:null});
            // res.status(404).render('404-page');
          })
    }
    
}
//join
module.exports=controlador;