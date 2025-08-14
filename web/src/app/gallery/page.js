'use client';
import { useState } from "react";
import PostPilot from "@/components/PostPilot";
import PreviewCanvas from "../preview/PreviewCanvas";
import imageforpilot from '../../../public/hero-sections/pilot-section-mobile.png';


const ComponentShowcase = () => {
    const [viewModes, setViewModes] = useState({
        postpilot: 'desktop',
        dashboard: 'desktop',
        landing: 'desktop'
    });

    const handleViewModeChange = (componentId, mode) => {
        setViewModes(prev => ({ ...prev, [componentId]: mode }));
    };

    const components = [
        {
            id: 'postpilot',
            component: PostPilot,
            title: 'PostPilot',
            description: 'A modern social media management landing page with clean design and engaging hero section.',
            viewMode: viewModes.postpilot,
            onViewModeChange: (mode) => handleViewModeChange('postpilot', mode),
            designerName: 'Nero',
            designerLink: 'https://x.com/nerooeth/status/1953452697815863445',
            developerName: 'Dearborn Adeyeni',
            developerLink: 'github.com/Dearbornadeolu',
            fileLink: '',
            createdAt: '2025-07-09',
            screenshotUrl: imageforpilot
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Showcase</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of React components with live previews in both desktop and mobile modes.
                    </p>
                </div>
                <div className="space-y-12">
                    {components.map((comp) => (
                        <PreviewCanvas
                            key={comp.id}
                            component={comp.component}
                            title={comp.title}
                            description={comp.description}
                            viewMode={viewModes[comp.id]}
                            onViewModeChange={(mode) => handleViewModeChange(comp.id, mode)}
                            designerName={comp.designerName}
                            designerLink={comp.designerLink}
                            developerName={comp.developerName}
                            developerLink={comp.developerLink}
                            fileLink={comp.fileLink}
                            createdAt={comp.createdAt}
                            status="active"
                            screenshotUrl={comp.screenshotUrl} // Pass screenshot URL
                        />
                    ))}
                </div>
                <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Switch between desktop and mobile views to see how each component responds to different screen sizes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComponentShowcase;