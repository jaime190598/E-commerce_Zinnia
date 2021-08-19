const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
function getUsersJSON(){
    //const productsFilePath = path.join(__dirname, '../data/products.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    return users;
}

const controlador = {
    registro: (req, res)=>{
        res.render('checkIn');
    },
    create: (req,res)=>{
        const users=getUsersJSON();
        let lastId =users[users.length - 1].id;
        const newUser={
        "id": (lastId+1),
        "name": req.body.name,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": req.body.password,
        "image": req.file.filename,
        }
        users.push(newUser);
		usersJSON=JSON.stringify(users, null, 2);
		fs.writeFileSync(usersFilePath, usersJSON);
        res.redirect("/login")
    }
}
//join
module.exports=controlador;