import React from 'react';

import { useState, useEffect } from 'react';

function Detalle() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                setProductos(ultimoProduct(products.data))

            })
    }, [])
    console.log(productos);
    useEffect(() => {

    }, [productos])
    useEffect(() => {
        return () => { }

    }, [])
    const ultimoProduct = (data) => {
        var id = 0;
        var productDetalle = {}
        var category={}
        data.map(product => {
            if (product.idproduct > id) {
                productDetalle = product;
                id = product.idproduct;
                /*  console.log(id) */
            }
        })
         category=productDetalle.category
         console.log(category);
        return productDetalle;
    }
    /* console.log(productos.category.name) */
    return (
        <React.Fragment>
            <div className="col-lg-12 mb-4">
                <h4>Ultimo producto Agregado</h4>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{productos && productos?productos.idproduct: null}:-{productos && productos?productos.name: null}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                        </div>
                        <span>Descripción:</span>
                        <p>{productos && productos?productos.description: null}</p>
                        <span>Categoria:</span>
                        <p>{productos && productos.category? productos.category.name: 'no hay nada'}</p>
                        <p>{productos && productos.category? productos.category.description: 'no hay nada'}</p>
                        <span>Precio de venta:</span>
                        <p>$ {productos && productos?productos.sale_price: null}</p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Detalle;