'use client'

import { FC } from 'react'
import { ProductResponse } from '@/app/Models/ProductModel'
import { useOptimistic } from 'react'
import ProductRow from '@/app/Components/ProductRow'

interface ProductListProps {
  products: ProductResponse
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const [optimisticProducts, removeOptimisticProduct] = useOptimistic(
    products,
    (state, removeProductId) => {
      return state.filter((product) => product.id !== removeProductId)
    }
  )

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
          {optimisticProducts.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              removeOptimisticProduct={removeOptimisticProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
