import { getProducts } from '@/app/repositories/ProductRepository'
import { NextResponse } from '../../../../node_modules/next/server'

export async function GET() {
  const products = await getProducts()

  return NextResponse.json({
    data: products,
  })
}
