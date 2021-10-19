const db = require("../../database/models");
const fs = require('fs');
const { group } = require("console");


const controlador = {
    category: (req, res) => {
        db.Category.findAll()
        .then(categorys=>{
           
            let respuesta={ 
                meta:{
                count:categorys.length,
                status : 200,
                url:'api/category'
            },
            categorys:categorys
        }
        res.json(respuesta);
        })
    }
     
}
module.exports = controlador;