import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import CategorysInDb from './CategorysInDb';
import Detalle from './DetalleProduct'
import Products from './Products';
import {Route, Switch} from 'react-router-dom'
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                <TopBar />
                <Switch>
                    <Route exact path="/">
                    <ContentRowTop />
                    <div className="category">
                    <Detalle />
                    <div className="row"> 
                    <CategorysInDb />
                    </div>
                    <Products />
                    </div>
                    </Route>
                    <Route path="/total">
                    <ContentRowTop />
                    </Route>
                    <div className="category">
                    <Route path="/ultimoProd">
                    <Detalle />
                    </Route>
                    <div className="row">
                    <Route path="/categorias">
                    <CategorysInDb />
                    </Route>		
					</div>
                    <Route path="/listado">
                    <Products />
                    </Route>
                    </div>
                    
                   </Switch>
                  
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;