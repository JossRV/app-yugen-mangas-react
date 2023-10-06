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
            <div className="row row-cols-6">
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
