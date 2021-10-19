import React from "react";

function ProductList(props) {
    return (
        <React.Fragment>
        <tr>
            <td>{props.idproduct}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>${props.sale_price}</td>
            <td>{props.category.name}</td>
        </tr>
        </React.Fragment>
    )
}
export default ProductList;