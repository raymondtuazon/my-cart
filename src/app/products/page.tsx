import ProductForm from '@/app/products/form'

export default function ProductPage() {
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Product Form</h1>
      </div>

      <ProductForm />
    </main>
  )
}
