import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaSquarePollHorizontal } from "react-icons/fa6";
const Header = () => {
    return (
        <div className=''>
            <h3 className='text-6xl uppercase text-gray-600 '>menu</h3>
            <nav>
                <div>
                    <Link to='/create' className='flex items-center text-lg my-3 hover:bg-violet-100 py-2 px-4  hover:text-sky-300/85 gap-3 rounded uppercase '><span><FaCartShopping /></span> create Producet</Link>
                    <Link to='/' className='flex items-center text-lg my-4 hover:bg-violet-100 py-2 px-4 rounded  gap-3 hover:text-sky-300/90 uppercase '><span><FaSquarePollHorizontal /></span> see all Producet</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header