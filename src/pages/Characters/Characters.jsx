import { useState ,useEffect,useContext} from 'react';
import './character.css'
import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'


export default function Characters() {
    const [data, setData] = useState([]); 
    const [dataCompleta, setDataCompleta] = useState([]); 
    const [filtrosAplicados, setFiltrosAplicados] = useState([]); 
    const [show, setShow] = useState(true); 

    const filterName = ["Character Alive", "Character Dead", "Female", "Male", "Origin Unknown"];
    
    const mostrarData = async () => {
        try {
            const infoAPI = await fetch("https://rickandmortyapi.com/api/character");
            const data = await infoAPI.json();
            setDataCompleta(data.results); 
            setData(data.results); 
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const filtrar = (inputData) => {
        const pulsado = inputData.checked;
        const filtroPulsado = inputData.value;

        if (pulsado) {
            setFiltrosAplicados([...filtrosAplicados, filtroPulsado]);
        } else {
            setFiltrosAplicados(filtrosAplicados.filter((fil) => fil !== filtroPulsado));
        }
    };


    const filterButton= () => {
        setShow(!show); 
      
    }

    useEffect(() => {
        let nuevaLista = [...dataCompleta]; 

        filtrosAplicados.forEach((filtro) => {
            switch (filtro) {
                case "Character Alive":
                    nuevaLista = nuevaLista.filter((personaje) => personaje.status === "Alive");
                    break;
                case "Character Dead":
                    nuevaLista = nuevaLista.filter((personaje) => personaje.status === "Dead");
                    break;
                case "Female":
                    nuevaLista = nuevaLista.filter((personaje) => personaje.gender === "Female");
                    break;
                case "Male":
                    nuevaLista = nuevaLista.filter((personaje) => personaje.gender === "Male");
                    break;
                case "Origin Unknown":
                    nuevaLista = nuevaLista.filter((personaje) => personaje.origin.name === "unknown");
                    break;
                default:
                    break;
            }
        });

        setData(nuevaLista); 
    }, [filtrosAplicados, dataCompleta]); // Dependencias para que se ejecute al cambiar los filtros

    // Llamamos a la API para obtener los datos al cargar el componente
    useEffect(() => {
        mostrarData();
    }, []);

    
    return (
        <div>
            <Navegation />

            <h2 className="subt-1">Filters</h2>

            <div className="mobile-filters mx-auto p-4 my-4 gap-3" onClick={(filterButton)}>
                <h2 className="text-white">Filters</h2>

                <button class="btn d-flex align-items-center">
                    <img src="./src/components/Navegation/filter-icon.svg" alt="Botón" class="me-2" width="24" height="24"></img>
                </button>
            </div>

            <form className={show ? 'form row gap-2 p-4 gap-3 mx-auto' : 'row form flex-column gap-2 p-3  align-items-center desktop-filter'}>
                {filterName.map((filter) => {
                    const isFilterApplied = filtrosAplicados.includes(filter);

                    return (
                        <Filter 
                            key={filter} 
                            title={filter} 
                            filtar={filtrar}
                            className={isFilterApplied ? 'filter-applied' : 'filter-default'}
                        />
                    );
                })}
            </form>

            <section className="d-flex gap-2 flex-wrap justify-content-center">
                {data.length !== 0 ? (
                    data.map((personaje) => (
                        <Card key={personaje.id} personaje={personaje}/>
                    ))
                ) : (
                    <p className="alert bg-success">
                        <i className="bi bi-exclamation-triangle-fill pe-2"></i>
                        Sorry! There are no characters with all those properties.
                    </p>
                )}
            </section>
        </div>
    );
}