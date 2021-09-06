module.exports = (sequelize, dataTypes)=>{
    let alias="Size";
    let cols = {
        idsize:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        size:{
            type: dataTypes.STRING
        }
    };
    let config = {
            tableName: "size",
            timestamps: false
    }
    const Size= sequelize.define(alias,cols,config);
    return Size;
}