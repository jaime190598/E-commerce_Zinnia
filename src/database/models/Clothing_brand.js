module.exports = (sequelize, dataTypes)=>{
    let alias="Clothing_brand";
    let cols = {
        idclothing_brand:{
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
            tableName: "clothing_brand",
            timestamps: false
    }
    const Clothing_brands= sequelize.define(alias,cols,config);
    return Clothing_brands;
}