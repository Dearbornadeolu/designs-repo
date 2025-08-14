import React from 'react';
import { Cloud, FileText, DollarSign, BookOpen, GraduationCap } from 'lucide-react';
import clodddybg from '../../public/hero-sections/clodddybg.jpg';

const Cloudddy = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/hero-sections/clodddybg.jpg')" }}

    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <Cloud className="w-8 h-8 text-white" />
          <span className="text-white text-xl font-semibold">Clouddy</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Features</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="cursor-pointer">Pricing</span>
          <span className="cursor-pointer">Docs</span>
          <span className="cursor-pointer">Tutorials</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gray-200 transition-colors">
            Log in
          </button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-8 py-16 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Deploy Projects{' '}
          <FileText className="inline w-12 h-12 text-white" />{' '}
          Effortlessly with<br />
          Lightning-Fast{' '}
          <Cloud className="inline w-12 h-12 text-white" />{' '}
          Servers
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Launch and manage your projects in seconds with ultra-fast servers
          optimized for teams, data, and performance
        </p>
        
        <div className="flex gap-4 mb-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg">
            See How it Works
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Cloud className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-800">Clouddy</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Deploy your projects effortlessly with lightning-fast servers</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                New Project
              </button>
            </div>
            
            {/* Projects Table */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 text-sm font-medium text-gray-600">
                <div className="col-span-1"></div>
                <div className="col-span-2">Name</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Domains</div>
                <div className="col-span-2">Exports in 2024</div>
                <div className="col-span-1">Products</div>
                <div className="col-span-1">Dec 1, 2024</div>
                <div className="col-span-1">Dec 8, 2024</div>
              </div>
              
              {/* Project Rows */}
              {[
                { name: 'Social Media', status: 'Published', domain: 'social.media.io', exports: '1,056,245,00', products: '6 Products', color: 'bg-purple-500' },
                { name: 'Realese', status: 'Draft', domain: 'dev.Social.in', exports: '845,265,00', products: '4 Products', color: 'bg-blue-500' },
                { name: 'Templates', status: 'Published', domain: 'public.dev.io', exports: '6,524,100,00', products: '8 Products', color: 'bg-green-500' },
                { name: 'Saas Start-up', status: 'Draft', domain: 'dev.startup.io', exports: '1,805,265,00', products: '3 Products', color: 'bg-orange-500' },
                { name: 'React Blog', status: 'Published', domain: 'dev.React.in', exports: '3,524,800,00', products: '4 Products', color: 'bg-pink-500' },
                { name: 'New Text Class', status: 'Published', domain: 'app.io', exports: '2,785,100,00', products: '2 Products', color: 'bg-indigo-500' },
                { name: 'Blog', status: 'Draft', domain: 'text.website.io', exports: '854,265,00', products: '4 Products', color: 'bg-red-500' },
                { name: 'Website', status: 'Published', domain: 'Website.app', exports: '4,785,100,00', products: '5 Products', color: 'bg-teal-500' }
              ].map((project, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 p-4 bg-white border-b border-gray-100 items-center text-sm hover:bg-gray-50 transition-colors">
                  <div className="col-span-1">
                    <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                  </div>
                  <div className="col-span-2 font-medium text-gray-800">{project.name}</div>
                  <div className="col-span-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-blue-600">{project.domain}</div>
                  <div className="col-span-2 font-medium">{project.exports}</div>
                  <div className="col-span-1 text-gray-600">{project.products}</div>
                  <div className="col-span-1 text-gray-500">Dec 1, 2024</div>
                  <div className="col-span-1 text-gray-500">Dec 8, 2024</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloudddy;