import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`card-base ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
