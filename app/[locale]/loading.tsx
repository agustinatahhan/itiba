export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-brown/20" />
          <div className="absolute inset-0 rounded-full border-2 border-t-brown border-l-transparent border-r-transparent border-b-transparent animate-spin" />
        </div>
        <span
          className="text-xs uppercase tracking-[0.25em] text-brown/60"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Itibá
        </span>
      </div>
    </div>
  );
}
