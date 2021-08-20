const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
function getProductsJSON(){
    //const productsFilePath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
}
function getcategorys(){
    const categorysFilePath = path.join(__dirname, '../data/categorys.json');
    const categorys = JSON.parse(fs.readFileSync(categorysFilePath, 'utf-8'));
    return categorys;
}

const controlador = {
    formulario: (req, res)=>{
        let categorys=getcategorys();
        let id=req.params.id;
        //console.log(categorys);
        res.render('formProduct',{idProduct:id, product:undefined, categorys:categorys});
    },
    geteditform:(req,res)=>{
        const products=getProductsJSON();
        let id=req.params.id;
        const product=products.filter(data=>data.id == id);
        //console.log(product)
        res.render('formProduct',{idProduct:id, product:product});

    },
    addProduct:(req,res)=>{
        let id=req.params.id;
        let categorys=getcategorys();
        const resulValidation= validationResult(req);
        if(resulValidation.errors.length >0){
            return res.render('formProduct',{
                errors: resulValidation.mapped(),
                oldData:req.body,
                idProduct:id,
                product:undefined,
                categorys:categorys
            })
        }
        const products=getProductsJSON();
        let lastId =products[products.length - 1].id;
        const newProduct={
        "id": (lastId+1),
        "name": req.body.name,
        "description": req.body.description,
        "image": req.file.filename,
        "category": req.body.category,
        "cost": req.body.cost,
        "size": req.body.size,
        "color": req.body.color,
        }
        products.push(newProduct);
		productsJSON=JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productsJSON);
        //res.redirect('/products');
    },
    editProduct:(req,res)=>{
        const products=getProductsJSON();
        let id=req.body.id;
        let image;
        if(req.file!=undefined){
            image=req.file.filename;
        }else{
            image= req.body.image;
        }
        const editProduct={
            "id": id,
            "name": req.body.name,
            "description": req.body.description,
            "image": image,
            "category": req.body.category,
            "cost": req.body.cost,
            "size": req.body.size,
            "color": req.body.color,
            }
        for(let i=0; i<products.length;i++){
            if(products[i].id==id){
              products.splice(i,1,editProduct)  
            }
        }
        productsJSON=JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect('/products');
    },
    deletProduct:(req,res)=>{
        const products=getProductsJSON();
        let id= req.params.id;
        let image= req.params.image;
        for(let i=0; i<products.length;i++){
            if(products[i].id==id){
              products.splice(i,1)  
            }
        }
        fs.unlink('./public/images/productos/'+image,(err)=>{
            if(err){
                console.log("failed to delete local image :"+ err);
            }else{
                console.log('successfully deleted local image');
            }
        })
        productsJSON=JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect('/products');
        console.log(id);
    }
}
//join
module.exports=controlador;