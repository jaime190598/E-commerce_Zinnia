import React from 'react';
import image from '../assets/images/zinniablanco.png';
import {Link} from 'react-router-dom'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="zinnia"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/" exact>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Zinnia Slow Fashion</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- paneles de totales -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/total">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                {/*<!-- detalle de ultimo producto o usuario creado -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ultimoProd">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>

                {/*<!-- categorias con el total de productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categorias">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorias</span></Link>
                </li>
                {/*<!-- lista de productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/listado">
                        <i className="fas fa-th-list"></i>
                        <span>Listado de Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;