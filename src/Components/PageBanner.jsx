import React from 'react'

const PageBanner = ({ name , path  }) => {
    return (
        <div className="h-auto">
            <div className="bg-gray-200 text-center p-12 md:p-22">
                <h1 className="text-4xl p-4 md:text-6xl">{name}</h1>
                <p className="text-2xl">Home  {path}</p>
            </div>
        </div >
    )
}

export default PageBanner