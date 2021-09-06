module.exports = (sequelize, dataTypes)=>{
    let alias="Rol";
    let cols = {
        idrol:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        }
    };
    let config = {
            tableName: "rol",
            timestamps: false
    }
    const Rol= sequelize.define(alias,cols,config);
    return Rol;
}