import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { decrypt} from "@/utils/lib/session"

// 1. Specify protected and public routes
const protectedRoutes = ['/admin/dashboard', 'admin/dashboard/view-applications', 
    'admin/dashboard/view-applications/:id*', '/apply', '/apply/fill-form']
const publicRoutes = ['/login', '/signup', '/', '/about', '/admissions', '/gallery', '/news', '/staff']

export async function middleware(req){

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const accessToken = cookies().get('accessToken')?.value
    const decodedUser = await decrypt(accessToken)
    // console.log("Decoded user: ", decodedUser)

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !decodedUser?.userId) {
        return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
    }

    // 6. Redirect to /admin/dashboard or /apply if the user is authenticated
    if (isPublicRoute && decodedUser?.userId || req.nextUrl.pathname.startsWith('/admin/dashboard')&&decodedUser?.role!=="admin"
    ) {
        console.log("Decoded user: ", decodedUser.userId, decodedUser.role)
        console.log("Redirecting user to /apply...")
        return NextResponse.redirect(new URL('/apply', req.nextUrl))
    }else if(isPublicRoute && decodedUser?.userId || req.nextUrl.pathname.startsWith('/apply')&&decodedUser?.role!=="applicant"){
        console.log("Redirecting user to /admin/dashboard...")
        return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))
    }

    // return await updateSession(request);
}

// Routes Middleware should not run on
// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

// Specify the list of protected paths
export const config = {
    matcher: ["/apply", "/apply/fill-form", "/admin/dashboard", "/admin/dashboard/view-applications",
        "/admin/dashboard/view-applications/:id*"
    ]
}