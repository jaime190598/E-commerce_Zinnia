import React,{Component} from 'react';

import ProductList from './PorductList';

class Products extends Component{
	constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            productsList:[]
        }
    }
    componentDidMount(){
       this.nuevaList();
    } 
    apiCall(url,consecuencia){
	    fetch(url)
        .then(response => {return response.json()})
        .then( (products) => {
           consecuencia(products.data)
        })
        .catch((error) => this.setState({
            isLoaded: true,
            error
          }))
        
    }
    nuevaList(){
        this.apiCall('/api/products', this.mostrar);
    }
    
    mostrar=(data)=>{
		this.setState({
			isLoaded:true,
		productsList:data
		})
    }
    componentDidUpdate(){
        console.log(this.state.productsList);
    }
    
    render(){
		let products = Array.from(this.state.productsList)
		return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h4 mb-2 text-gray-800">Todos los productos de la BD</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="200px" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
                                            <th>Categoria</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
                                            <th>Categoria</th>
										</tr>
									</tfoot>
									<tbody>
									{
                                    products.map((product,index)=>{
                                        return  <ProductList  {...product}  key={index} />
                                    })
                                }
								
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )}
}
export default Products;