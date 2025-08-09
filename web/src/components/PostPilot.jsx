import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const PostPilot = () => {
    return (
        <div 
            className="min-h-screen bg-white pt-1.5 relative overflow-hidden"
            style={{
                backgroundImage: `url('/hero-sections/postpilotbg.png')`,
                backgroundSize: '89%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 ">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white transform rotate-45 flex items-center justify-center">
                        <div className="w-4 h-4 bg-black transform"></div>
                    </div>
                    <span className="text-xl font-semibold text-gray-900">PostPilot</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Team</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Templates</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">Log In</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative px-6 py-16 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                    <div className="relative flex items-center space-x-2 text-sm bg-white  text-blue-600 px-3 py-1 rounded-full w-fit loading-border border border-blue-50"> 
                            <span className="text-blue-600">✨</span>
                            <span className="text-gray-600">Plan smarter, post faster, grow bigger.</span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Manage All Your Social Media Posts in One Place
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Create, schedule, and publish content across every platform without the chaos.
                                PostPilot helps you stay consistent, and grow your online presence with ease.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center space-x-2">
                                <span>Start Now</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 flex items-center space-x-2">
                                <Play className="w-4 h-4" />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trusted by section */}
                <div className="mt-24 text-center">
                    <p className="text-gray-500 text-sm mb-8">Trusted by:</p>
                    <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
                        <div className="text-gray-400 font-medium">Velocity</div>
                        <div className="text-gray-400 font-medium">Synergy</div>
                        <div className="text-gray-400 font-medium">⭐ Stellar</div>
                        <div className="text-gray-400 font-medium">❋ Enigma</div>
                        <div className="text-gray-400 font-medium">🌊 Spectrum</div>
                        <div className="text-gray-400 font-medium">⚡ Zenith</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PostPilot;