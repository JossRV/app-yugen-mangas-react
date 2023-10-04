import React from 'react'

export const Tarjeta = (props) => {
    return (
        <>
            <div className="card border-0 bg-transparent text-light mb-1">
                <div className='contenerdorTarjeta' style={{ width: "100%", height: "100%" }}>
                    <img src={`/${props.datos.imagen}`} className="card-img-top h-100 rounded-bottom imagen " alt="..." />
                </div>
                <div style={{ position: 'absolute', background: "rgba(255,0,0,0.6)", margin: "4px", top: 0, right: "13px" }} className='py-1 px-2 rounded-1'>
                    {/* la altura y el ancho aplicado al texto, se ajustara el fondo de color acorde al texto */}
                    <b style={{ width: "100%", height: "100%", }}>{props.datos.tipo}</b>
                </div>
                <div className="card-body">
                    <p className='text-center mx-0 my-1' style={{ fontSize: "15px" }}><b>{props.datos.titulo}</b></p>
                    <div className='row justify-content-between rounded-1 mb-1' style={{ backgroundColor: "#242424", height: "35px" }}>
                        <div className="col-7 py-2 px-3">
                            <p style={{ fontSize: "13px" }} className='card-text'><b>{`Capitulo ${props.datos.capitulos}`}</b></p>
                        </div>
                        <div className="col-5 text-end py-2 px-3 mt-1">
                            <p style={{ fontSize: "8px" }} className='card-text'>{props.datos.time}</p>
                        </div>
                    </div>
                    <div className='row justify-content-between rounded-1' style={{ backgroundColor: "#242424", height: "35px" }}>
                        <div className="col-7 py-2 px-3">
                            <p style={{ fontSize: "13px" }} className='card-text'><b>{`Capitulo ${props.datos.capitulos - 1}`}</b></p>
                        </div>
                        <div className="col-5 text-end py-2 px-3 mt-1">
                            <p style={{ fontSize: "8px" }} className='card-text'>{props.datos.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
