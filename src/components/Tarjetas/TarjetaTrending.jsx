import React from 'react'

export const TarjetaTrending = ({id, trending}) => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-2 text-center">
                    <div style={{ background: "rgba(36, 36, 36, 1)" }} className='text-light rounded-2 text-center'>
                        <p style={{ width: "40px", height: "40px" }} className='py-2 ps-2 m-0'>{id}</p>
                    </div>
                </div>
                <div className="col-10 text-start">
                    <div className="row">
                        <div className="col-3 imgTarjeta">
                            <img src={trending.imagen} alt="" className='rounded-1'/>
                        </div>
                        <div className="col-9">
                            <p>{trending.titulo}</p>
                            <div style={{ position: "absolute", background: "red", padding:"6px" }} className='rounded-1'>
                                <b style={{ width: "100%", height: "100%", fontSize:"15px" }}>COMIC</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
