'use client';
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tokenLogos = [
    { name: 'Landing Pages', price: '20.945', position: { top: '15%', left: '12%' }, icon: '△' },
    { name: 'Testimonial Section', price: '2.945', position: { top: '20%', right: '15%' }, icon: '❋' },
    { name: 'footer', price: '19.346', position: { bottom: '35%', left: '8%' }, icon: '⬢' },
    { name: 'pricing', price: '440', position: { bottom: '25%', right: '12%' }, icon: '◊' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Main center radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,1) 100%)`
        }}
      />
      
      {/* Top right white gradient */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2"
        style={{
          background: `radial-gradient(ellipse at top right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 30%, transparent 60%)`
        }}
      />
      
      {/* Bottom left subtle gradient */}
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/3"
        style={{
          background: `radial-gradient(ellipse at bottom left, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)`
        }}
      />
      
      {/* Mouse-following subtle glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03) 0%, transparent 50%)`
        }}
      />

      {/* Floating Token Logos with improved styling */}
      {tokenLogos.map((token, index) => (
        <div
          key={token.name}
          className="absolute flex items-center space-x-3 opacity-80"
          style={{
            ...token.position,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`
          }}
        >
          <div className="w-6 h-6 bg-white bg-opacity-15 rounded-full flex items-center justify-center text-xs backdrop-blur-sm border border-white border-opacity-20">
            {token.icon}
          </div>
          <div className="text-sm">
            <div className="font-medium text-white">{token.name}</div>
            <div className="text-gray-400 text-xs font-light">{token.price}</div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Video Play Button - Link */}
        <div className="mb-6">
          <Link
            href="/gallery"
            className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
          >
            <Play className="w-4 h-4 ml-0.5 text-white group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Unlock Assets Button - Link */}
        <div className="mb-10">
          <Link
            href="/gallery"
            className="flex items-center space-x-3 bg-black bg-opacity-60 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm border border-white border-opacity-25 hover:bg-opacity-70 transition-all duration-300"
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-white">Unlock Your Assets Spark!</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
            Unleash Stunning Designs with{' '}
            <span 
              className="font-light"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Open-Source Power
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Join a community-driven revolution to craft beautiful, responsive websites using Next.js. Inspired by sleek interfaces like FoodPilot, this GitHub repo empowers developers to create, collaborate, and innovate—free and accessible to all.
          </p>
        </div>

        {/* Action Buttons - now Links */}
        <div className="flex flex-col md:flex-row gap-2 items-center space-x-4 mb-20 relative">
          <Link
            href="/gallery"
            className="bg-black bg-opacity-70 px-8 py-3 rounded-full text-white font-medium border border-white border-opacity-25 hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/gallery"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Discover More
          </Link>
          
          {/* Rainfall lines under buttons */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className = "absolute bg-white opacity-20"
                style={{
                  left: `${(index - 2) * 20}px`,
                  top: `${index * 15}px`,
                  width: '1px',
                  height: `${60 + index * 10}px`,
                  animation: `rainfall ${2 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-16 right-8 text-right">
          <div className="text-white font-light text-sm mb-3 tracking-wide">Design & Development</div>
          <div className="w-12 h-px bg-white ml-auto opacity-80"></div>
        </div>
      </div>

      {/* Animated Connection Lines - more subtle */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Connecting lines from tokens to center */}
        <line
          x1="20%" y1="25%"
          x2="50%" y2="45%"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          className="animate-pulse"
        />
        <line
          x1="80%" y1="30%"
          x2="50%" y2="45%"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <line
          x1="15%" y1="70%"
          x2="50%" y2="55%"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <line
          x1="85%" y1="75%"
          x2="50%" y2="55%"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  );
}