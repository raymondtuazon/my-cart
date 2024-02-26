'use client'

import { IProduct } from '@/app/Models/ProductModel'
import { BiInfoCircle, BiSolidTrash, BiSolidTrashAlt } from 'react-icons/bi'
import { deleteProduct } from '@/app/Helpers/Products'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useCartStore } from '@/app/store/Cart'
import { ConfirmDialog } from './ConfirmDialog'

interface ProductRowProps {
  product: IProduct
  removeOptimisticProduct: (productId: number) => void
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  removeOptimisticProduct,
}) => {
  const { deleteProduct } = useCartStore()
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleViewProduct = (product_id: number) => {
    router.push(`/products/${product_id}`)
  }

  const handleDeleteProduct = async (product_id: number) => {
    removeOptimisticProduct(product_id)

    // Directus: Product Delete
    await deleteProduct(product_id)
  }

  const handleDeleteItem = (productId: number) => {
    deleteProduct(productId)
    setIsModalOpen(false)
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
            className='btn bg-red-500 hover:bg-red-600 text-white'
            onClick={() => setIsModalOpen(true)}
          >
            <BiSolidTrashAlt size='2rem' />
          </button>
          <ConfirmDialog
            title='Delete Product'
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={() => {
              handleDeleteItem(product.id)
            }}
          >
            Are you sure you want to delete this item to cart?
          </ConfirmDialog>
        </div>
      </td>
    </tr>
  )
}

export default ProductRow
