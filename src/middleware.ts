import { NextRequest, NextResponse } from 'next/server'
const publicRoutes = ['/signIn', '/']
import { getAccessToken } from '@/utils/cookies'

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublicRoute = publicRoutes.includes(path)
  if (isPublicRoute) {
    return NextResponse.next()
  }
  const access_token = getAccessToken()
  if (!access_token) {
    return NextResponse.redirect(new URL('/signIn', req.nextUrl))
  } else if (publicRoutes) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }
  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}