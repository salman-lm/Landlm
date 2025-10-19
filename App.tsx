
import React from 'react';

const App: React.FC = () => {
    return (
        <main className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-950 to-black animate-gradient-xy z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="opacity-0 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
                        AILM<span className="text-blue-400">.</span>in
                    </h1>
                </div>

                <div className="opacity-0 animate-fade-in-up animation-delay-200">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 tracking-wide">
                        Evolution in Progress
                    </h2>
                </div>

                <div className="opacity-0 animate-fade-in-up animation-delay-400">
                    <p className="max-w-2xl text-base md:text-lg text-gray-400">
                        We are meticulously crafting a new digital experience. Our team is working behind the scenes to bring something truly special to life.
                    </p>
                </div>
                
                <div className="opacity-0 animate-fade-in-up animation-delay-600 pt-4">
                     <p className="text-blue-300 text-lg">
                        Thank you for your patience.
                    </p>
                </div>
            </div>
             <div className="absolute bottom-4 text-xs text-gray-600 z-10">
                &copy; {new Date().getFullYear()} AILM.in - All Rights Reserved.
            </div>
        </main>
    );
};

export default App;
