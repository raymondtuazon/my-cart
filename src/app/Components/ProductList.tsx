'use client'

import { FC } from 'react'
import { BiInfoCircle, BiSolidTrash } from 'react-icons/bi'
import { ProductResponse } from '@/app/Models/ProductModel'
import { deleteProduct } from '@/app/Helpers/Products'
import { useRouter } from 'next/navigation'

interface ProductListProps {
  products: ProductResponse
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const router = useRouter()

  const handleDeleteProduct = async (product_id) => {
    await deleteProduct(product_id)
  }

  const handleViewProduct = async (product_id) => {
    router.push(`/products/${product_id}`)
  }

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
          {products.map((product) => (
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
                  <button
                    className='btn btn-outline btn-info'
                    onClick={() => handleViewProduct(product.id)}
                  >
                    <BiInfoCircle size='2rem' />
                  </button>
                  <button
                    className='btn btn-outline btn-error'
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <BiSolidTrash size='2rem' />
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
