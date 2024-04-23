import React from 'react'
import Header from './Header.jsx'

const MasterLayout = (props) => {
    return (
        <div className=''>
            <div className=' px-5 flex gap-4 items-center border-b py-4 shadow-2xl'>

                <h2 className='text-2xl font-semibold text-blue-500'>CRUD</h2>
            </div>
            <div className='flex px-4 py-6 gap-3 mt-5 '>
                <div className='w-2/12'>
                    <Header/>
                </div>
                <div className='w-4/6'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MasterLayout