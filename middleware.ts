import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const requestHeaders = new Headers(request.headers)
  
  if (forwardedHost) {
    requestHeaders.set('origin', `https://${forwardedHost}`)
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}