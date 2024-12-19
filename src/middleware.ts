import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define paths
    const publicPaths = ['/login', '/signup', '/']; // Pages accessible without authentication
    const protectedPaths = ['/balance', '/budget','/dashboard']; // Pages requiring authentication

    const isPublicPath = publicPaths.includes(path);
    const isProtectedPath = protectedPaths.includes(path);

    // Retrieve the authentication token
    const token = request.cookies.get('token')?.value || '';

    // Redirect authenticated users away from public pages
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl)); // Redirect to dashboard or a main logged-in page(in future make the dashboard through which all others files can be accsesed)
    }

    // Redirect unauthenticated users trying to access protected pages
    if (!token && isProtectedPath) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    // Allow other requests to proceed
    return NextResponse.next();
}

// Config for middleware
export const config = {
    matcher: [
        '/',           // Homepage
        '/signup',     // Signup page
        '/login',      // Login page
        '/balance',    // Balance page
        '/budget',     // Budget page
        '/dashboard',  // Dashboard page
        // '/profile',    // Profile page(optional) can include it in the dashboard also
        // '/settings',   // Settings page(optional) can include it in the dashboard also
    ],
};
