import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
 
const secretKey = process.env.ACCESS_TOKEN_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('50m')
    .sign(encodedKey)
}
 
export async function decrypt(accessToken: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(accessToken, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify token')
  }
}

/**
 * Sign userId and role, attach the accessToken as a session cookie
 * @param userId 
 * @param role 
 */ 
export async function createSession(userId: string, role: string) {
  const expiresAt = new Date(Date.now() + 50 * 60 * 1000)
  const accessToken = await encrypt({ userId, role, expiresAt })
 
  cookies().set('accessToken', accessToken, {
    httpOnly: true,// Prevent client-side JavaScript from accessing the cookie.
    secure: process.env.NODE_ENV === "production",// Use https to send the cookie
    expires: expiresAt,
    sameSite: 'lax',// Specify whether the cookie can be sent with cross-site requests
    path: '/',
  })
}

/**
 * Update the session cookie
 * @returns 
 */
export async function updateSession() {
  const accessToken = cookies().get('accessToken')?.value
  const payload = await decrypt(accessToken)
 
  if (!accessToken || !payload) {
    return null
  }
 
  const expires = new Date(Date.now() + 60 * 60 * 1000)
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  })
}

/**
 * Logout user by deleting the session cookie
 */
export function logout() {
  cookies().delete('accessToken')
}