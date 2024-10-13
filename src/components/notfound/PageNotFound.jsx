import React from 'react';
import { CarIcon, HomeIcon } from 'lucide-react';

export default function PageNotFound() {
    return (
        <div>
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-6xl font-bold text-[#FB9733] mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
                <p className="text-xl text-gray-600 mb-8">
                    It seems like you've taken a wrong turn. The page you're looking for doesn't exist.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="/"
                        className="flex items-center justify-center bg-zinc-800 text-[#FB9733] px-6 py-3 rounded-md hover:bg-[#FB9733] hover:text-white transition-colors w-full sm:w-auto"
                    >
                        <HomeIcon className="w-5 h-5 mr-2" />
                        Return to Homepage
                    </a>
                    <a
                        href="/cars"
                        className="flex items-center justify-center bg-[#FB9733] text-white px-6 py-3 rounded-md hover:bg-zinc-800 hover:text-[#FB9733] transition-colors w-full sm:w-auto"
                    >
                        <CarIcon className="w-5 h-5 mr-2" />
                        Browse Our Cars
                    </a>
                </div>
            </div>
        </div>
    )
}
