import React from 'react';

export default function Card() {
    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-2xl">
            <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
                alt="Apple Watch Series 7"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Apple Watch Series 7
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    GPS, Aluminium Case, Starlight Sport. The ultimate device for a healthy life.
                </p>
                <div className="flex items-center mb-4">
                    {[...Array(4)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                    ))}
                    <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-600 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    <span className="ml-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">$69</span>
                    <button
                        className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
