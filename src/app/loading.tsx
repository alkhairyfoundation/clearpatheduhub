export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cp-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-cp-green/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cp-green animate-spin" />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green">
            Clear<span className="text-cp-gold">Path</span>
          </span>
          <span className="text-cp-gold text-[10px] tracking-[0.2em] uppercase">
            Edu Hub
          </span>
        </div>
      </div>
    </div>
  );
}
