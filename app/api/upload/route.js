import { handleUpload } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
 
export async function POST(request) {

    try {

        console.log(request.body)
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get('filename');
        console.log(filename)
        const blob = await put(`lumko-hs/${filename}`, request.body, {
          access: 'public',
        });

        return NextResponse.json({success: true, message: "Success", blob});
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server Error", status: 400  });// The webhook will retry 5 times waiting for a status 200
    }
}