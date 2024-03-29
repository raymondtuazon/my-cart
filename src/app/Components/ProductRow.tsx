'use client'

import { IProduct } from '@/app/Models/ProductModel'
import { BiInfoCircle, BiSolidTrash, BiCartAdd } from 'react-icons/bi'
import { deleteProduct } from '@/app/Helpers/Products'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useCartStore } from '@/app/store/Cart'
import { ConfirmDialog } from './ConfirmDialog'
import { OkDialog } from './OkDialog'

interface ProductRowProps {
  product: IProduct
  removeOptimisticProduct: (productId: number) => void
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  removeOptimisticProduct,
}) => {
  const { addToCart, cart } = useCartStore()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOkOpen, setIsModalOkOpen] = useState(false)

  const handleViewProduct = (product_id: number) => {
    router.push(`/products/${product_id}`)
  }

  const handleDeleteProduct = async (product_id: number) => {
    removeOptimisticProduct(product_id)

    // Directus: Product Delete
    await deleteProduct(product_id)
  }

  const handleAddProduct = (product: IProduct) => {
    const existingItemIndex = cart.findIndex(
      (item: IProduct) => item.id === product.id
    )
    if (existingItemIndex !== -1) {
      setIsModalOkOpen(true)
    } else {
      addToCart(product)
    }

    setIsModalOpen(false)
  }

  const handleCloseModal = () => {
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
            className='btn btn-info text-white'
            onClick={() => setIsModalOpen(true)}
          >
            <BiCartAdd size='2rem' />
          </button>
          <ConfirmDialog
            title='Add To Cart'
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={() => {
              handleAddProduct(product)
            }}
          >
            Are you sure you want to add this item to cart?
          </ConfirmDialog>
          <OkDialog
            title='Add To Cart'
            isOpen={isModalOkOpen}
            onOk={() => {
              setIsModalOkOpen(false)
            }}
          >
            Item was already in the cart
          </OkDialog>
        </div>
      </td>
    </tr>
  )
}

export default ProductRow
