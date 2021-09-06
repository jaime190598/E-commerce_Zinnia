
module.exports = (sequelize, dataTypes)=>{
    let alias="Category";
    let cols = {
        idcategory:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        status:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: "category",
            timestamps: false
    }
    const Categorys = sequelize.define(alias,cols,config);
    /* Categorys.associate=(models)=>{
        Categorys.hasMany(models.Products,{
            foreignKey: "fkidcategory",
                as:'products'
        })
    } */
    return Categorys;
}