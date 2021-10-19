import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';


/* tarjetas de totales */
function ContentRowTotales() {
    const [totales, setTotales] = useState([]);
    let totalesCount = [];
    /* obtecion de datos del componente */
    useEffect(() => {
        /* users */
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                let user = {
                    color: "primary",
                    titulo: "Total de Usuario",
                    valor: data.meta.count,
                    icono: "fas fa-users"
                }
                totalesCount.push(user)
            })
            .catch(error => console.error(error))
            /* products */
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                
                let products = {
                    color: "success",
                    titulo: "Total de Ropas",
                    valor: data.meta.count,
                    icono: "fas fa-tshirt"
                }
                let category = {
                    color: "success",
                    titulo: "Total de Categorias",
                    valor: data.meta.countCategory,
                    icono: "fas fa-clipboard"
                }
                totalesCount.push(products);
                totalesCount.push(category);
                setTotales(totalesCount)
            })
            .catch(error => console.error(error))
    },[])
    /* actualizacion */
    useEffect(() => {
     console.log('actualizado')
    }, [totales])
    /* desmonte de componente */
    useEffect(() => {
     return()=>console.log('%se desmonto el componente', 'color:red');
    }, [])
    /* retorno de componente */
    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    totales.map((total, index) => {
                        return <SmallCard  {...total} key={index} />
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default ContentRowTotales;