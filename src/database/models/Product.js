module.exports = (sequelize, dataTypes)=>{
    let alias="Product";
    let cols = {
        idproduct:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
/*         created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }, */
        code:{
            type: dataTypes.STRING
        },
        name:{
            type: dataTypes.STRING
        },
        sale_price:{
            type:dataTypes.DECIMAL(11,2)
        },
        stock:{
            type:dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        },
        status:{
            type: dataTypes.INTEGER
        },
        fkidcategory:{
            type: dataTypes.INTEGER
        },
        fkidclothing_brand:{
            type: dataTypes.INTEGER
        },
        fkidsize:{
            type: dataTypes.INTEGER
        },
        fkidcolor:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: "product",
            timestamps: false
    }
    const Products = sequelize.define(alias,cols,config);
    return Products;
}