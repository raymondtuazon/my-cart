import { ShopButton } from '@/app/components/ShopButton'
import { getProducts } from '@/app/Helpers/Products'
import ProductList from '@/app/components/ProductList'

export default async function Home() {
  // Directus: Product Lists
  const products = await getProducts()

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Lazapee</h1>
      </div>

      <ProductList products={products} />

      <ShopButton className='mt-10' />
    </main>
  )
}
