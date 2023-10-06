import React from 'react'

export const Filtros = () => {
    return (
        <>
            <div className="row my-3">
                <div className="col">
                    <select className='form-select bg-transparent text-light border border-secondary border-opacity-25 p-2' name="estatus" id="estatus">
                        <option value="estatus" className='fw-bold text-dark'>Estatus</option>
                        <option value="estatus" selected className='text-dark'>All</option>
                        <option value="estatus" className='text-dark'>Ongoing</option>
                        <option value="estatus" className='text-dark'>Hiatus</option>
                        <option value="estatus" className='text-dark'>Dropped</option>
                        <option value="estatus" className='text-dark'>Completed</option>
                        <option value="estatus" className='text-dark'>Canceled</option>
                    </select>
                </div>
                <div className="col">
                    <select className='form-select bg-transparent text-light border border-secondary border-opacity-25 p-2' name="estatus" id="estatus">
                        <option value="estatus" className='fw-bold text-dark'>Order</option>
                        <option value="estatus" selected className='text-dark'>Update at</option>
                        <option value="estatus" className='text-dark'>Create at</option>
                        <option value="estatus" className='text-dark'>Title</option>
                        <option value="estatus" className='text-dark'>Trending</option>
                    </select>
                </div>
                <div className="col">
                    <select className='form-select bg-transparent text-light border border-secondary border-opacity-25 p-2' name="estatus" id="estatus">
                        <option value="estatus" className='fw-bold text-dark'>Order</option>
                        <option value="estatus" className='text-dark'>Ascending</option>
                        <option value="estatus" selected className='text-dark'>Descending</option>
                    </select>
                </div>
                <div className="col">
                    <select className='form-select bg-transparent text-white border border-secondary border-opacity-25 p-2' name="estatus" id="estatus">
                        <option value="estatus" className='fw-bold text-dark'>Generes</option>
                        <option value="estatus" selected className='text-dark'>Filter by generes</option>
                        <option value="estatus" className='text-dark'>Ongoing</option>
                        <option value="estatus" className='text-dark'>Hiatus</option>
                        <option value="estatus" className='text-dark'>Dropped</option>
                        <option value="estatus" className='text-dark'>Completed</option>
                        <option value="estatus" className='text-dark'>Canceled</option>
                    </select>
                </div>
                <div className="col-5"></div>
            </div>
        </>
    )
}
