import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken";
import { SignJWT, jwtVerify } from "jose";

export async function middleware(req){
    console.log(req.nextUrl.pathname)
    const cookieStore = cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    try{
        //Verify the token from the cookies
        if(accessToken){
            console.log("Access token was found from cookies...")
            const { payload } = await jwtVerify(accessToken, process.env.ACCESS_TOKEN_SECRET, {
                algorithms: ["HS256"],
              });
            req.user = payload
            console.log("test 2")
            return NextResponse.next()
        }
        
    }catch(err){
        return NextResponse.redirect(new URL("/", req.url))
    }
    // if(req.nextUrl.pathname.startsWith("/apply") || req.nextUrl.pathname.startsWith("/admin/dashboard"))
    return NextResponse.redirect(new URL("/sign-in",req.url))

    // return await updateSession(request);
}

// Specify the list of protected paths
export const config = {
    matcher: ["/apply", "/apply/fill-form", "/admin/dashboard", "/admin/dashboard/view-applications",
        "/admin/dashboard/view-applications/:id*"
    ]
}

// export async function encrypt(payload) {
//     return await new SignJWT(payload)
//       .setProtectedHeader({ alg: "HS256" })
//       .setIssuedAt()
//       .setExpirationTime("10 sec from now")
//       .sign(key);
//   }

// export async function decrypt(input){
//     const { payload } = await jwtVerify(input, key, {
//         algorithms: ["HS256"],
//     });
//     return payload;
// }

// export async function getSession() {
//     const session = cookies().get("accessToken")?.value;
//     if (!session) return null;
//     return await decrypt(session);
// }

// export async function updateSession(req) {
//     const session = req.cookies.get("accessToken")?.value;
//     if (!session) return;

//     // Refresh the session so it doesn't expire
//     const parsed = await decrypt(session);
//     parsed.expires = new Date(Date.now() + 10 * 1000);
//     const res = NextResponse.next();
//     res.cookies.set({
//         name: "session",
//         value: await encrypt(parsed),
//         httpOnly: true,
//         expires: parsed.expires,
//     });
//     return res;
// }

// export async function middleware(request) {
//     return await updateSession(request);
//   }