import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function App() {
  const [step, setStep] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderHearts = () => {
    const hearts = Array.from({ length: 15 });
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((_, i) => {
          const left = Math.random() * 100;
          const animationDuration = 4 + Math.random() * 6; 
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute text-rose-300 opacity-60 text-xl sm:text-2xl md:text-4xl animate-float"
              style={{
                left: `${left}%`,
                bottom: '-50px',
                animation: `float ${animationDuration}s linear ${delay}s infinite`
              }}
            >
              ❤️
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-rose-50 font-sans text-slate-800 selection:bg-rose-200 flex flex-col justify-center overflow-hidden">
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(0.8); opacity: 1; }
          100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
        }
      `}</style>

      {renderHearts()}

      {/* Step 1: Hero Section */}
      {step === 0 && (
        <div className="relative z-10 w-full animate-fade-in px-4">
          <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />
          <header className="flex flex-col items-center justify-center text-center mt-10 sm:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-rose-600 mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Happy Mother's Day, Ammi! 🌸
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
              To the woman whose infinite patience, unconditional love, and constant Duas have shaped my entire world.
            </p>
          </header>
        </div>
      )}

      {/* Step 2: Heartfelt Letter */}
      {step === 1 && (
        <div className="relative z-10 w-full animate-fade-in">
          <section className="px-4 w-full">
            <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-rose-500 mb-4 sm:mb-8">A Note For You</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-loose mb-4 sm:mb-6">
                Words can never truly capture how much you mean to me. From the food you cook with so much love, to the wisdom you share when I am lost, you are my safe place. Everything good in me is a reflection of you.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-loose font-medium">
                Thank you for being my greatest supporter and my best friend.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* Step 3: Beautiful Memories */}
      {step === 2 && (
        <div className="relative z-10 w-full animate-fade-in">
          <section className="px-4 max-w-5xl mx-auto w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-rose-600 mb-6 sm:mb-8 drop-shadow-sm">Beautiful Memories</h2>
            {/* Grid ko mobile par 1 column, tablet par 2, aur laptop par 3 columns rakha hai */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="aspect-square bg-rose-200/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 flex items-center justify-center overflow-hidden">
                <img src="/1.jfif" alt="Memory with Ammi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="aspect-square bg-rose-200/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 flex items-center justify-center overflow-hidden">
                <img src="/2.jpg" alt="Memory with Ammi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="aspect-square bg-rose-200/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 flex items-center justify-center overflow-hidden">
                <img src="/3.png" alt="Memory with Ammi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>

            </div>
          </section>
        </div>
      )}

      {/* Step 4: Footer & Dua */}
      {step === 3 && (
        <div className="relative z-10 w-full animate-fade-in">
          <footer className="text-center px-4 w-full">
            <div className="max-w-2xl mx-auto bg-rose-600 p-6 sm:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Meri Dil Se Dua</h3>
              <p className="text-rose-100 text-lg sm:text-xl italic leading-relaxed px-2">
                "Ya Allah, meri pyaari Ammi ko hamesha sehat-o-tandurasti ata farma. Unka saya mere sar par hamesha salamat rakh aur unki zindagi dheron khushiyon aur sakoon se bhar de. Ameen."
              </p>
              <div className="mt-8 sm:mt-10 text-rose-200 text-xs sm:text-sm opacity-80">
                Made with ❤️ for Ammi
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="relative z-20 flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 pb-8 px-4">
        {step > 0 && (
          <button 
            onClick={prevStep}
            className="w-full sm:w-auto px-6 py-3 bg-white text-rose-500 font-semibold rounded-full shadow-md hover:bg-rose-50 transition-all border border-rose-200 cursor-pointer text-sm sm:text-base"
          >
            Peechay (Back)
          </button>
        )}
        
        {step < 3 ? (
          <button 
            onClick={nextStep}
            className="w-full sm:w-auto px-8 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer text-sm sm:text-base"
          >
            Aagay (Next) ➡️
          </button>
        ) : (
          <button 
            onClick={() => setStep(0)}
            className="w-full sm:w-auto px-8 py-3 bg-white text-rose-500 font-bold rounded-full shadow-lg hover:bg-rose-50 transition-all border border-rose-200 cursor-pointer text-sm sm:text-base"
          >
            Shuru Se Dekhein (Restart) 🔄
          </button>
        )}
      </div>

    </div>
  );
}