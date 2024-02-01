'use client'

import { useEffect, useState } from 'react'
import { BiCart, BiInfoCircle } from 'react-icons/bi'
import {IProduct} from "@/app/repositories/ProductRepository";

const ProductList = () => {
  const [data, setData] = useState<IProduct[]>([])
  const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    const result = await fetch('/api/products')
    const response = await result.json()
    setData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No product data</p>

  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td></td>
              <td>
                <div className='avatar'>
                  <div className='w-24 rounded-xl'>
                    <img src={product.image} alt={product.image} />
                  </div>
                </div>
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <div className='flex space-x-2'>
                  <button className='btn btn-outline btn-success'>
                    <BiCart size='2rem' />
                  </button>
                  <button className='btn btn-outline btn-info'>
                    <BiInfoCircle size='2rem' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
