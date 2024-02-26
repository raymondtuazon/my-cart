'use client'

import { BiCart } from 'react-icons/bi'
import { useCartStore } from '@/app/store/Cart'
import { useRouter } from 'next/navigation'

export function CartButton(props: { name: string }) {
  const { cart } = useCartStore()
  const router = useRouter()

  return (
    <button
      className='btn btn-outline btn-info'
      onClick={() => router.push(`/cart`)}
    >
      {props.name}
      <BiCart size='2rem' />
      <span> {cart.length}</span>
    </button>
  )
}
