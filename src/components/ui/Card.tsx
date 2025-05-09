import React from 'react';
import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) => {
  return (
    <div className={`relative w-full h-48 bg-gray-200 ${className}`}>
      {src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export const CardBody = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3 className={`text-xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export const CardFooter = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`px-6 py-4 bg-gray-50 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default Object.assign(Card, {
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Footer: CardFooter
});