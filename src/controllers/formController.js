const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const controlador = {
    formulario: (req, res) => {
        db.Category.findAll().then(categorys => {
            db.Clothing_brand.findAll().then(clothings_brand => {
                db.Size.findAll().then(size => {
                    let id = req.params.id;
                    res.render('formProduct', { idProduct: id, product: undefined, categorys: categorys, clothings_brand, size });
                })
            })
        })
        // let categorys=getcategorys();

        //console.log(categorys);

    },
    geteditform: (req, res) => {
        db.Category.findAll().then(categorys => {
            db.Clothing_brand.findAll().then(clothings_brand => {
                db.Size.findAll().then(size => {
                    db.Product.findByPk(req.params.id, { include: [{ association: "category" }, { association: "clothing_brand" }, { association: "size" }] }).then(product => {
                        let id = req.params.id;
                        res.render('formEditProduct', { idProduct: id, product, categorys, clothings_brand, size });
                    })
                })
            })
        })

    },
    addProduct: (req, res) => {
        
        db.Category.findAll().then(categorys => {
            db.Clothing_brand.findAll().then(clothings_brand => {
                db.Size.findAll().then(size => {
                    const resulValidation = validationResult(req);
                    if (resulValidation.errors.length > 0) {
                        if (req.file != undefined) {
                            let image = req.file.filename;
                            //delete folder public
                            fs.unlink('./public/images/productos/' + image, (err) => {
                                if (err) {
                                    console.log("failed to delete local image :" + err);
                                } else {
                                    console.log('successfully deleted local image');
                                }
                            })
                        }

                        let id = req.params.id;
                        /* console.log(req.body); */
                        return res.render('formProduct', {
                            errors: resulValidation.mapped(),
                            oldData: req.body,
                            idProduct: id,
                            product: undefined,
                            categorys,
                            clothings_brand,
                            size
                        })

                    }
                    
                    const newProduct = {
                        "id": 0,
                        "code": req.body.code,
                        "name": req.body.name,
                        "sale_price": req.body.sale_price,
                        "stock": req.body.stock,
                        "description": req.body.description,
                        "image": req.file.filename,
                        "status": 1,
                        "color": req.body.color,
                        "fkidcategory": req.body.category,
                        "fkidclothing_brand": req.body.clothing_brand,
                        "fkidsize": req.body.size,
                    }
                    console.log(newProduct)
                    db.Product.create(newProduct);
                    res.redirect('/products');
                })
            })
        });
        //res.redirect('/products');
    },
    editProduct: (req, res) => {
        let id = req.body.id;
        let image;
        db.Category.findAll().then(categorys => {
            db.Clothing_brand.findAll().then(clothings_brand => {
                db.Size.findAll().then(size => {
                    const resulValidation = validationResult(req);
                    if (resulValidation.errors.length > 0) {

                        let id = req.params.id;
                        /* console.log(req.body); */
                        return res.render('formEditProduct', {
                            errors: resulValidation.mapped(),
                            oldData: req.body,
                            idProduct: id,
                            product: undefined,
                            categorys,
                            clothings_brand,
                            size
                        })

                    }
                    if (req.file != undefined) {
                        image = req.file.filename;
                        //delete folder public
                        fs.unlink('./public/images/productos/' + req.body.image, (err) => {
                            if (err) {
                                console.log("failed to delete local image :" + err);
                            } else {
                                console.log('successfully deleted local image');
                            }
                        })
                    } else {
                        image = req.body.image;
                    }
                    const editProduct = {
                        "id": id,
                        "code": req.body.code,
                        "name": req.body.name,
                        "sale_price": req.body.sale_price,
                        "stock": req.body.stock,
                        "description": req.body.description,
                        "image": image,
                        "status": 1,
                        "color": req.body.color,
                        "fkidcategory": req.body.category,
                        "fkidclothing_brand": req.body.clothing_brand,
                        "fkidsize": req.body.size,
                    }
                    db.Product.update(editProduct, {
                        where: { idproduct: id }
                    });
                    res.redirect("/products");
                })
            })
        });

    },
    deletProduct: (req, res) => {
        let image = req.params.image;
        //delete database
        db.Product.destroy({
            where: { idproduct: req.params.id }
        });
        //delete folder public
        fs.unlink('./public/images/productos/' + image, (err) => {
            if (err) {
                console.log("failed to delete local image :" + err);
            } else {
                console.log('successfully deleted local image');
            }
        })
        res.redirect("/products");
    }
}
//join
module.exports = controlador;