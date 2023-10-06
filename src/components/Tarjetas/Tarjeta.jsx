import React from 'react'

export const Tarjeta = (props) => {
    return (
        <>
            <div className="card border-0 bg-transparent text-light" style={{padding:"6px"}}>
                <div className='contenerdorTarjeta rounded-2' style={{ width: "100%", height: "320px" }}>
                    <img src={`${props.datos.imagen}`} className="card-img-top h-100 imagen" alt="..." />
                </div>
                <div style={{ position: 'absolute', background: "rgba(255,0,0,0.6)", margin: "4px", top: "6px", right: "6px" }} className='py-1 px-2 rounded-1'>
                    {/* la altura y el ancho aplicado al texto, se ajustara el fondo de color acorde al texto */}
                    <b style={{ width: "100%", height: "100%", }}>{props.datos.tipo}</b>
                </div>
                <div className="card-body pt-0">
                    <p className='text-center p-0 mx-0 mb-1 mt-2 fw-bold' style={{ fontSize: "15px" }}>{props.datos.titulo}</p>
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
