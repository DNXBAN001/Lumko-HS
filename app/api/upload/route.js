import { handleUpload } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
 
export async function POST(request) {

    const body = await request.json();

    console.log(body)
    // const fileName = body.substring(12)
    console.log(fileName)
    const token = "vercel_blob_rw_nFDYGW97CdHl9kBu_kRnePvTs9LEaQ1XQo2sHPBMW9dz1Nz"
    try {
        const jsonResponse = await handleUpload({
            token,
            request,
            body,
            onBeforeGenerateToken: async (pathname , clientPayload) => {
                // Generate a client token for the browser to upload the file
                const token = clientPayload
                // ⚠️ Authenticate and authorize users before generating the token.
                // Otherwise, you're allowing anonymous uploads.
                console.log("Test 1")
                return {
                allowedContentTypes: ['image/jpeg', 'image/png', 'image/jpg', "application/pdf"],
                tokenPayload: JSON.stringify({
                    // optional, sent to your server on upload completion
                    // you could pass a user id from auth, or a value from clientPayload
                }),
                };
            },
            // onUploadCompleted: async ({ blob, tokenPayload }) => {
            //     // Get notified of client upload completion
            //     // ⚠️ This will not work on `localhost` websites,
            //     // Use ngrok or similar to get the full upload flow
        
            //     console.log('blob upload completed', blob, tokenPayload);
        
            //     try {
            //     // Run any logic after the file upload completed
            //     // const { userId } = JSON.parse(tokenPayload);
            //     // await db.update({ avatar: blob.url, userId });
            //     } catch (error) {
            //         throw new Error('Could not update user');
            //     }
            // },
        });
        // const blob = await put(fileName, body, { access: 'public'});
    
        return NextResponse.json({success: true, message: "Success"/*, blob*/});
    } catch (error) {
        return NextResponse.json(
        { error: error },
        { status: 400 }, // The webhook will retry 5 times waiting for a status 200
        );
    }
}