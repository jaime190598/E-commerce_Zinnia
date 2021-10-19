import React, {Component} from 'react';
import Category  from './Category';


class CategorysInDb extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            categorysList:[],
            class:"card-body"
        }
    }
    componentDidMount(){
        fetch('/api/products')
        .then(response => {return response.json()})
        .then( (categorys) => {
            this.setState({
                isLoaded:true,
            categorysList:categorys.meta.countByCategory
        })})
        .catch((error) => this.setState({
            isLoaded: true,
            error
          }))
    } 
   /*  apiCall(url,consecuencia){
        
    } */
    /* nuevoGenre(){
        this.apiCall(, this.mostrar);
    }
    
    mostrar=(data)=>{
        
    } */
    componentDidUpdate(){
        
    }
    classMouseOver(){
        this.setState({
        class:""
    })
    }

    render(){
        let categorys = Array.from(this.state.categorysList)
        return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-12 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.classMouseOver()}>
                                Categorias</h6>
                        </div>
                        <div className={this.state.class}>
                            <div className="row">
                                {
                                    categorys.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )}

}
export default CategorysInDb;