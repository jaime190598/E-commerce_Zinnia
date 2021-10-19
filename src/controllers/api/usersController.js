const db = require("../../database/models");
const fs = require('fs');


const controlador={
    users:(req,res)=>{
        db.User.findAll()
        .then(users=>{
            /* console.log(users) */
            let dataUser=[];
            users.map(user=>{
                let miUser=user.dataValues
                delete miUser['password']
                delete miUser['telephone']
                delete miUser['avatar']
                miUser={...miUser,urlDetails:'http://localhost:3001/api/users/detail/'+user.dataValues.iduser}
                dataUser.push(miUser);
            })
            let respuesta={ 
                meta:{
                status : 200,
                count: users.length,
                url:'api/users'
            },
            users:dataUser
        }
        res.json(respuesta);
        })
    },
    usersDetail:(req,res)=>{
        db.User.findByPk(req.params.id,{include:[{association:"rol"}]})
        .then(user=>{
           
            let respuesta={ 
                meta:{
                status : 200,
                url:'api/users/detail'
            },
            user:user
        }
        res.json(respuesta);
        })
    },
    usersId:(req,res)=>{
        db.User.findByPk(req.params.id)
        .then(user=>{
           
                let miUser=user.dataValues
                delete miUser['password']
                delete miUser['rol']
                miUser={...miUser,urlAvatar:'http://localhost:3001/api/users/avatar/'+user.dataValues.avatar}
        
            let respuesta={ 
                meta:{
                status : 200,
                url:'api/users:'
            },
            data:miUser
        }
        res.json(respuesta);
        })
    },
    avatar:(req,res)=>{
        let img= req.params.img
        res.render('./external/image-perfil',{img})
    }
}
module.exports= controlador;