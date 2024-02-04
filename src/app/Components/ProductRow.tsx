'use client'

import { IProduct } from '@/app/Models/ProductModel'
import { FC } from 'react'
import { BiInfoCircle, BiSolidTrash } from 'react-icons/bi'
import { deleteProduct } from '@/app/Helpers/Products'
import { router } from 'next/client'

interface ProductRowProps {
  product: IProduct
  removeOptimisticProduct: (productId: number) => void
}

const ProductRow: FC<ProductRowProps> = ({
  product,
  removeOptimisticProduct,
}) => {
  const handleViewProduct = (product_id) => {
    router.push(`/products/${product_id}`)
  }

  const handleDeleteProduct = async (product_id) => {
    removeOptimisticProduct(product_id)

    await deleteProduct(product_id)
  }

  return (
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
  )
}

export default ProductRow
