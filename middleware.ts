import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest){
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup' || path === '/'; // further we have to add features components in which authentication not required
    const token = request.cookies.get('token')?.value||''

    // if(token && isPublicPath){
    //     return NextResponse.redirect(new URL('/profile',request.nextUrl))// directly use redirect('/)
    // }
    if(!token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
}


// See "Matching Paths" below to learn more
export const config = {
    matcher:[
      '/',
      '/signup',
      '/login',
      '/balance',
      '/budget',
    ]
  }