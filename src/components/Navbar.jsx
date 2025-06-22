import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full p-3 flex justify-between items-center border-b-2 border-gray-300'>
            <div className='text-gray-800 font-bold text-3xl'>
                Shop.co
            </div>

            <div className='flex justify-between items-center gap-2'>
                <NavLink to="/" >Products</NavLink>
                <NavLink to="/additem" >Add item</NavLink>
            </div>
        </div>
    )
}

export default Navbar