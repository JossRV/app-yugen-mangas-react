import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-black" style={{ height: "170px" }}>
                <div className="row text-center ">
                    <div className="col ">
                        <img src="/icon.png" alt="" style={{ width: '32px' }} className='mb-3 mt-3' /> <br />
                        <p style={{ fontSize: "14px", color:"rgba(255,255,255,0.5)" }}>
                            All rights deserved. Idealized and built by Heaning. <br />
                            This website was built using TailwindCSS + NextJS 13. <br />
                        </p>
                        <div className="row mt-1 justify-content-center">
                                Contact me &nbsp;&nbsp;&nbsp;
                                Privacy policy &nbsp;&nbsp;&nbsp;
                                Discord &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
