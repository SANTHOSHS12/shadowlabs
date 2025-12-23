import React, { useState } from 'react';

import Button from './Button';

export default function ReadyToStart() {
    const [billingCycle, setBillingCycle] = useState('annually');

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                    Begin your <br />
                    ShadowLab journey
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                    ShadowLab is free to try and use daily, whether you're in meetings, closing deals, learning something new, or just exploring the power of AI.
                </p>

                {/* Toggle - Visual simulation matching the image */}
                <div className="flex items-center justify-center gap-4 mb-12 relative">
                    <span
                        className={`text-sm font-semibold cursor-pointer ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}
                        onClick={() => setBillingCycle('monthly')}
                    >
                        Monthly
                    </span>

                    <button
                        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${billingCycle === 'annually' ? 'bg-gray-900' : 'bg-gray-200'}`}
                        onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly')}
                    >
                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </button>

                    <span
                        className={`text-sm font-semibold cursor-pointer ${billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-400'}`}
                        onClick={() => setBillingCycle('annually')}
                    >
                        Annually
                    </span>

                    {/* 20% Off Scribble */}
                    <div className="absolute -bottom-8 -right-8 md:right-auto md:left-[60%] transform rotate-[-4deg] font-handwriting text-gray-900 font-bold text-sm bg-white border border-gray-100 p-2 shadow-sm rounded-lg hidden md:block">
                        20% Off
                    </div>
                </div>

                <div>
                    <Button className="px-10 py-4 text-lg font-bold shadow-xl shadow-primary/30 bg-primary hover:bg-blue-700 text-white rounded-full">
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
}
