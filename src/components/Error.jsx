import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-[40vh] flex justify-center items-center'>
        <div>
        <h2 className='text-center text-5xl font-semibold'>404 Page Not Found</h2>
        <Link className='btn btn-primary flex justify-center mt-5' to="/">Back to Home</Link>
        </div>
    </div>
  )
}

export default ErrorPage