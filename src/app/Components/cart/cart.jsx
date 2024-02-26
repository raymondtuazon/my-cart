'use client'
import React from 'react'
import { useCartStore } from '@/app/store/Cart'
import CartRow from '@/app/Components/CartRow'

const Cart = () => {
  const { cart, totalPrice } = useCartStore()
  const formattedPrice = totalPrice.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <>
      <div className='mb-5'>
        <p className='text-xl font-bold text-right'>
          Total Price: {formattedPrice}
        </p>
      </div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr className='text-center'>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.length ? (
              <>
                {cart.map((product, index) => (
                  <CartRow
                    key={index}
                    product={product}
                    removeOptimisticProduct={() => {}}
                  />
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={5} className='text-center'>
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart
