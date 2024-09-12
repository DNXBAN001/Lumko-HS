"use client"

import React from 'react';
import { useParams } from "next/navigation";

export default function PaperContent() {

    const {paperId} = useParams()
    
    const newpaperId = decodeURIComponent(paperId)

    return (
        <div className="mt-12 w-full">
            <iframe src={`/papers/${newpaperId}`} className="w-full h-80 lg:h-screen" ></iframe>
        </div>
    )
}
