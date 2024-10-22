import { NextRequest, NextResponse } from 'next/server'
const signInRoutes = ['/signIn']
const publicRoutes = ['/', '/forgotPassword', '/register', '/renew-password', '/rentelDetail', '/verify-account']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublicRoute = publicRoutes.includes(path)
  const isSignInRoutes = signInRoutes.includes(path)
  const isPageNotToken = isPublicRoute || isSignInRoutes
  const access_token = req.cookies.get('access_token')?.value
  
  if (!access_token){
    if (isPageNotToken) return NextResponse.next()
      return NextResponse.redirect(new URL("/signIn", req.nextUrl))
  }else{
    if (isSignInRoutes) return NextResponse.redirect(new URL("/manageAccommodation", req.nextUrl))
    return NextResponse.next()
  }
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|locales|_next/image|.*\\.png$).*)'],
}
