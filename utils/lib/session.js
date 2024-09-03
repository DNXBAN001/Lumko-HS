import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

 
const secretKey = process.env.ACCESS_TOKEN_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload, expiry) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiry)
    .sign(encodedKey)
}

export async function decrypt(accessToken) {
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
 * @param User 
 */ 
export async function createSession(user) {
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12)//session expires in 12hours
  const accessToken = await encrypt(user, expiresAt)
 
  cookies().set('accessToken', accessToken, {
    httpOnly: true,// Prevent client-side JavaScript from accessing the cookie.
    secure: process.env.NODE_ENV === "production",// Use https to send the cookie
    expires: expiresAt,
    sameSite: 'lax',// Specify whether the cookie can be sent with cross-site requests
    path: '/',
  })
}

/**
 * 
 * @returns decodedUser
 */
export async function getSession(){
    const accessToken = cookies().get("accessToken")?.value
    if(!accessToken){
        return null
    }
    return await decrypt(accessToken)
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