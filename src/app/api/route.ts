import { NextResponse } from '../../../node_modules/next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Frontend API',
  })
}
