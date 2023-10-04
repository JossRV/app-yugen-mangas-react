import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Buscador = () => {
  return (
    <>
    {/* barra de busqueda y nombre de la pagina */}
      <footer>
        <div className="container-fluid bg-black py-3">
          <div className="row justify-content-around ">
            <div className="col-4 mt-2">
              <div className="row">
                <div className="col text-end">
                  <img src="/icon.png" alt="" style={{ width: '11%' }} />
                </div>
                <div className="col mt-1">
                  <h4><b>Yugen Mangas</b></h4>
                </div>
              </div>
            </div>
            <div className="col-5">
              <form className="mx-3" role="search">
                <div className="input-group mb-3 text-ligth">
                  <button className="btn text-white border border-0" style={{backgroundColor:'rgba(18,18,18,1)',height:'45px'}} type="button"><FaMagnifyingGlass/></button>
                  <input type="text" className="input-busqueda form-control border border-0 text-white me-5" style={{backgroundColor:'rgba(18,18,18,1)',height:'45px',width:'10px'}} placeholder="Search for a series..." aria-label="Example text with button addon"/>
                </div>
              </form>
            </div>
            <div className="col-3">
              {/* seleccion un saludo con tu nombre y acciones (cuenta) */}
              <select className="form-select bg-black text-white border border-0" aria-label="Default select example" style={{ width: '10rem' }}>
                <option defaultValue={true}>Hi, JossRV</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
