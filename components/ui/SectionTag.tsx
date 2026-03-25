interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionTag({
  children,
  light = false,
  className = "",
}: SectionTagProps) {
  return (
    <span
      className={`section-tag ${light ? "!text-gold/70" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
