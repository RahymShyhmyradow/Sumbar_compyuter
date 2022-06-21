import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
    let {title}=useParams()
    return (
        <div className='w-full mt-5 bg-red-500'>
            <p className='text-3xl text-white'>Kategory {title}</p>
        </div>
    )
}

export default Category
