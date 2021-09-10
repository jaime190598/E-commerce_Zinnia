module.exports = (sequelize, dataTypes)=>{
    let alias="User";
    let cols = {
        iduser:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        telephone:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        avatar:{
            type: dataTypes.STRING
        },
        fkidrol:{
            type: dataTypes.INTEGER
        },
        fkidlocation:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: "user",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false
    }
    const Users = sequelize.define(alias,cols,config);
    return Users;
}