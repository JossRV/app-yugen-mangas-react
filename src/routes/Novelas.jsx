import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { apisNovels } from '../apis'
import { Tarjeta } from '../components/Tarjetas/Tarjeta'
import { Footer } from '../components/Footer/Footer'


export const Novelas = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="row ">
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="row row-cols-6">
                        {
                            apisNovels.map((datos, index) => {
                                // console.log(datos)
                                return <Tarjeta key={index} datos={datos} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
