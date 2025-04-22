'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    } else if (modalRef.current) {
      gsap.to(modalRef.current, { y: -50, opacity: 0, duration: 0.3, ease: 'power3.in' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : null
  );
};

const LetsTalkPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const rightGroupRef = useRef(null);
  const leftGroupRef = useRef(null);

  useEffect(() => {
    const rightGroup = rightGroupRef.current;
    const leftGroup = leftGroupRef.current;
    const btn = buttonRef.current;

    if (!btn || !rightGroup || !leftGroup) return;

    gsap.set(leftGroup, { x: -40, opacity: 0 });

    const handleEnter = () => {
      gsap.to(rightGroup, {
        x: 40,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(leftGroup, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.05,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(rightGroup, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.05,
        ease: 'power2.out',
      });
      gsap.to(leftGroup, {
        x: -40,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    btn.addEventListener('mouseenter', handleEnter);
    btn.addEventListener('mouseleave', handleLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleEnter);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="relative flex items-center justify-center w-48 h-12 bg-invest cursor-pointer text-white rounded-full overflow-hidden transition"
      >
        <div
          ref={rightGroupRef}
          className="absolute flex items-center gap-2 font-[family-name:var(--font-kumbh-sans)]"
        >
          <span>Let’s talk</span>
          <ArrowRight size={20} />
        </div>

        <div
          ref={leftGroupRef}
          className="absolute flex items-center gap-2 font-[family-name:var(--font-kumbh-sans)]"
        >
          <ArrowRight size={20} />
          <span>Let’s talk</span>
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-(family-name:--font-mulish) font-semibold mb-4 text-center">Let<span className='text-invest'>'</span>s Talk</h2>
        <p className="text-gray-600 mb-6 text-center font-(family-name:--font-mulish)">We’d love to hear from you. Let’s start a conversation!</p>
        <form className="space-y-4 font-(family-name:--font-mulish)">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder="Your Message" className="w-full p-3 h-32 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="submit" className="cursor-pointer w-full bg-invest text-white py-3 rounded-lg  transition">Send</button>
        </form>
      </Modal>
    </div>
  );
};

export default LetsTalkPopup;