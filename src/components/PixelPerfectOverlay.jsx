import { useState, useEffect } from 'react';

export default function PixelPerfectOverlay({ imagePath, opacity = 0.5 }) {
    const [isVisible, setIsVisible] = useState(true);
    const [currentOpacity, setCurrentOpacity] = useState(opacity);

    if (!isVisible) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsVisible(true)}
                    className="bg-black text-white px-3 py-1 rounded shadow-lg text-xs"
                >
                    Show Overlay
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden h-screen w-screen">
            <div
                className="absolute top-0 left-0 w-full h-auto bg-no-repeat bg-top bg-contain"
                style={{
                    backgroundImage: `url(${imagePath})`,
                    opacity: currentOpacity,
                    height: '200vh' // Allow scrolling
                }}
            ></div>

            {/* Controls */}
            <div className="fixed bottom-4 right-4 z-[60] bg-white p-2 rounded shadow-xl border border-gray-200 pointer-events-auto flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold uppercase text-gray-500">Overlay</span>
                    <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-red-500">×</button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={currentOpacity}
                    onChange={(e) => setCurrentOpacity(parseFloat(e.target.value))}
                    className="w-32"
                />
                <div className="text-[10px] text-gray-400 text-center">{Math.round(currentOpacity * 100)}% Opacity</div>
            </div>
        </div>
    );
}
