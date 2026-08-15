export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-8 h-8 rounded-full border border-white/20 border-t-white/60 animate-spin" />
    </div>
  );
}
