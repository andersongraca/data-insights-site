import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Trigger click animation
    setIsClicked(true);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 600);

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in ${
            isClicked ? 'animate-click-pulse' : 'hover:scale-110'
          }`}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp 
            size={24} 
            className={`${isClicked ? 'animate-click-bounce' : 'animate-bounce'}`}
          />
        </button>
      )}

      <style>{`
        /* Fade-in animation for button appearance */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        /* Gentle bounce for idle state */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        /* Click pulse - button scales down then back up */
        @keyframes clickPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.85);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-click-pulse {
          animation: clickPulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Ripple effect - expanding circle from center */
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(6, 182, 212, 0);
          }
        }

        .animate-click-pulse::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }

        /* Enhanced bounce for arrow during click */
        @keyframes clickBounce {
          0% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-12px) scale(1.1);
          }
          50% {
            transform: translateY(0) scale(0.95);
          }
          75% {
            transform: translateY(-6px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-click-bounce {
          animation: clickBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Glow effect on click */
        @keyframes glowPulse {
          0% {
            filter: drop-shadow(0 0 2px rgba(6, 182, 212, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.8));
          }
          100% {
            filter: drop-shadow(0 0 2px rgba(6, 182, 212, 0.5));
          }
        }

        .animate-click-pulse {
          animation: clickPulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), glowPulse 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
