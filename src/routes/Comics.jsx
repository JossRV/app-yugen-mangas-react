import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { apisComics } from '../apis'
import { Tarjeta } from '../components/Tarjetas/Tarjeta'
import { Footer } from '../components/Footer/Footer'
import { Filtros } from '../components/Filtros/Filtros'

export const Comics = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <Filtros />
        <div className="row">
          <div className="col">
            <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-2">
              {
                apisComics.map((datos, index) => {
                  // console.log(datos)
                  return <Tarjeta key={index} datos={datos} />
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
