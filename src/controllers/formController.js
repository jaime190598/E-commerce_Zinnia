const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    formulario: (req, res)=>{
        let id=req.params.id;
        console.log(id);
        res.render('formRegister',{idProduct:id, product:undefined});
    },
    addProduct:(req,res)=>{
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
        
        //console.log(newProduct)
        res.redirect('/formRegister');
    },
    geteditform:(req,res)=>{
        let id=req.params.id;
        const product=products.filter(data=>data.id == id);
        //console.log(product)
        res.render('formRegister',{idProduct:id, product:product});

    },
    editProduct:(req,res)=>{
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
        res.redirect('/formRegister');
    },
    deletProduct:(req,res)=>{
        let id= req.params.id;
        for(let i=0; i<products.length;i++){
            if(products[i].id==id){
              products.splice(i,1)  
            }
        }
        productsJSON=JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect('/products');
        console.log(id);
    }
}
//join
module.exports=controlador;