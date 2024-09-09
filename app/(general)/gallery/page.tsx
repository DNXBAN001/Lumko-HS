"use client"

import React from "react";
import Image from "next/image";
import { imageGallery } from "@/utils/lib/image-gallery.js"

export default function Gallery() {

    const [galleryImages, setGalleryImages] = React.useState(imageGallery)
    const [filterBy, setFilterBy] = React.useState({
        year: "2022",
        category: "all"
    })

    React.useEffect(() => {
        if(filterBy.category === "all"){
            setGalleryImages(imageGallery.filter(item => item.year === filterBy.year))
        }
        if(filterBy.category !== "all"){
            setGalleryImages(imageGallery.filter(item => item.year === filterBy.year && item.category === filterBy.category)
            )
        }
    }, [filterBy])

    const imageList = galleryImages.map(imageItem => (
        <div key={imageItem.id} className="mt-6">
            <Image src={`/gallery/${imageItem.name}`} width={350} height={250} className="sm:w-auto" alt="img" />
            <p>{imageItem.description+" - "+imageItem.year}</p>
        </div>
    )) 

    function handleFilterByYear(year: string){
        setFilterBy(prevState => ({
            ...prevState, 
            year: year
        }))
    }
    function handleFilterByCategory(category: string){
        setFilterBy(prevState => ({
            ...prevState, 
            category: category
        }))
    }
    
    return (
        <div className="main-body">
            <div><Image src="/banner-5-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/></div>
            <div className="gallery-container mt-12 mb-12 w-4/5 m-auto">
                <h1 className="text-3xl text-center">Our Gallery</h1>
                <div className="gallery-year-filters mt-12 flex flex-wrap pt-12">
                    <div className={`filter-wrapper px-3 py-1 rounded-lg
                        ${filterBy.year === "2024" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByYear("2024")}>2024</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 ml-3 rounded-lg
                        ${filterBy.year === "2023" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByYear("2023")}>2023</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 ml-3 rounded-lg
                        ${filterBy.year === "2022" ? 'bg-red-900 text-white': ''}`}>
                        <button onClick={() => handleFilterByYear("2022")}>2022</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 ml-3 rounded-lg
                        ${filterBy.year === "2015" ? 'bg-red-900 text-white': ''}`}>
                        <button onClick={() => handleFilterByYear("2015")}>2015</button>
                    </div>
                </div>
                <div className="gallery-category-filters flex flex-wrap mt-3">
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 rounded-lg
                        ${filterBy.category === "all" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("all")}>All</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "class-photo" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("class-photo")}>Class</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "sport" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("sport")}>Sports</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "heritage" ? 'bg-red-900 text-white': ''}`}>
                        <button onClick={() => handleFilterByCategory("heritage")}>Heritage</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "staff" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("staff")}>Staff</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "prom" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("prom")}>Prom</button>
                    </div>
                    <div className={`filter-wrapper px-3 py-1 mt-1 sm:mt-0 ml-3 rounded-lg
                        ${filterBy.category === "other" ? 'bg-red-900 text-white': ''}`}>
                            <button onClick={() => handleFilterByCategory("other")}>Other</button>
                    </div>
                </div>
                <div className="gallery-wrapper mt-6 md:flex md:justify-between md:flex-wrap items-center">
                    {imageList}
                </div>
                {imageList.length === 0 && <p className="text-center">No results found</p>}
            </div>
        </div>
    )
}