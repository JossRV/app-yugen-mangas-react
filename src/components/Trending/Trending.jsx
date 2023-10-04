import React from 'react'

export const Trending = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div style={{ background: "rgba(36, 36, 36, 1)" }} className='text-light rounded-2'>
                            <p style={{ width: "100%", height: "50px", paddingTop: "12px" }}>Today</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div style={{ background: "rgba(36, 36, 36, 0.3)" }} className='text-light rounded-2 bg-opacity-25'>
                            <p style={{ width: "100%", height: "50px", paddingTop: "12px", color:"rgba(255,255,255,0.3)" }}>Week</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div style={{ background: "rgba(36, 36, 36, 0.3)" }} className='text-light rounded-2'>
                            <p style={{ width: "100%", height: "50px", paddingTop: "12px", color:"rgba(255,255,255,0.3)" }}>All</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
