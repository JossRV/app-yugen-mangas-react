import React from 'react'
import { Menu } from '../components/Menu/Menu'
import Carrucel from '../components/Carrucel/Carrucel'
import { FaFire, FaFireAlt } from "react-icons/fa";
import { Tarjeta } from '../components/Tarjetas/Tarjeta';
import { apisComics, apiTrending, apisNovels } from '../apis.js';
import { Trending } from '../components/Trending/Trending';
import { TarjetaTrending } from '../components/Tarjetas/TarjetaTrending';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
// const apis = [
//     {
//         "titulo": "Elegí Un Martillo Para Salvar El Mundo",
//         capitulos: 48,
//         tipo: "MANHWA",
//         imagen: "martillo.webp"
//     },{
//         titulo: "Elegí Un Martillo Para Salvar El Mundo",
//         capitulos: 48,
//         tipo: "MANHWA",
//         imagen: "martillo.webp"
//     }
// ]

export const Inicio = () => {
    return (
        <>
            <Menu />
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Carrucel />
                        <div className="row mt-4">
                            <div className="col-8">
                                <p style={{ fontSize: "35px" }} className='mb-4'><b><FaFire /> Updates - Comics</b></p>
                                <div className="row row-cols-4">
                                    {
                                        apisComics.map((datos, index) => {
                                            // console.log(datos)
                                            return <Tarjeta key={index} datos={datos} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-4 mt-3 mb-4">
                                <p style={{ fontSize: "50px" }} className='text-center mb-3'><b><FaFireAlt /> Trending</b></p>
                                <div className="row mb-4">
                                    <Trending />
                                </div>
                                {
                                    apiTrending.map((trending, index) => {
                                        return (
                                            <>
                                                <TarjetaTrending key={index} id={index + 1} trending={trending} />
                                                <hr />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-3"></div>
                            <div className="col">
                                <Link className='btn bg-black text-light p-3' to={'/comics'} style={{ fontSize: "13px" }} >VER TODAS LAS SERIES</Link>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p style={{ fontSize: "35px" }} className='mb-3'><b><FaFire /> Updates - Novels</b></p>
                    <div className="row row-cols-6">
                        {
                            apisNovels.map((datos, index) => {
                                // console.log(datos)
                                return <Tarjeta key={index} datos={datos} />
                            })
                        }
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-5"></div>
                    <div className="col">
                        <Link className='btn bg-black text-light p-3' to={'/novelas'} style={{ fontSize: "13px" }} >VER TODAS LAS NOVELAS</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
