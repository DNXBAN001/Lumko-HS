"use client"

import React from 'react';
import { useParams } from "next/navigation";
import { papers } from "@/utils/lib/papers"
import Link from "next/link"

export default function PaperContent() {

    const {paperId} = useParams()
    
    // const newPaperId = decodeURIComponent(paperId)//decode the uri param
    
    const paperWithTheId = papers.filter(paper => paper.id === Number(paperId))[0]

    const fileUrl = paperWithTheId.fileName

    return (
        <div className="mt-4 mb-2 w-full min-h-screen">
            <div className="mb-4">
                <p className="text-blue-600"><Link href="/past-papers">Back to Past Papers</Link></p>
            </div>
            <iframe src={fileUrl} className="w-full h-screen" ></iframe>
        </div>
    )
}
