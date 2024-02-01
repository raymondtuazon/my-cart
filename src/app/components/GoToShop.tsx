'use client'

import { BiCart } from 'react-icons/bi'
import {useRouter} from "next/navigation";

const GoToShop = () => {
  const router = useRouter()
  const redirectToPage = () => {
    router.push('/products')
  }

  return (
    <div>
      <button
        className='btn btn-outline btn-info w-full'
        onClick={redirectToPage}
      >
        <BiCart size='2rem' />
        Create Products
      </button>
    </div>
  )
}

export default GoToShop
