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
        color:{
            type: dataTypes.STRING
        },
        fkidcategory:{
            type: dataTypes.INTEGER
        },
        fkidclothing_brand:{
            type: dataTypes.INTEGER
        },
        fkidsize:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: "product",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false
    }
    const Products = sequelize.define(alias,cols,config);
    
    Products.associate=(models)=>{
        Products.belongsTo(models.Category,{
            foreignKey: "fkidcategory",
            as:'category'
        })
        Products.belongsTo(models.Clothing_brand,{
            foreignKey: "fkidclothing_brand",
            as:'clothing_brand'
        })
        Products.belongsTo(models.Size,{
            foreignKey: "fkidsize",
            as:'size'
        })
    }

    return Products;
}