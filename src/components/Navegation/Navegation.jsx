import './nav.css';
import { Link } from 'react-router'


export default function Navegation() {
    return (
     
            <nav className='container-open nav navbar navbar-expand-lg d-flex justify-content-between p-5 w-100'>
                <div className="container-fluid d-flex justify-content-between aling-items-center">
                    <Link className=" text-decoration-none" to="/">
                        <h1 className="h1RyM t-rm navbar-brand cursor-p data-discover=true">Rick & Morty</h1>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <img src="./src/components/Navegation/list.svg" alt="Menu" class="iconoNav me-2" width="24" height="24"></img>
                    </button>
                    <div className="navbar-collapse justify-content-end collapse " id="navbarSupportedContent">
                        <ul className="container-items nav nav-pills">
                            <li className="nav-item">
                                <Link className="ancla bc-1 nav-link text-decoration-none bc-hover" to="/Characters" >Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="ancla bc-2 nav-link text-decoration-none bc-hover" to="/Contact" >Contact</Link>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>

      
    )
}
