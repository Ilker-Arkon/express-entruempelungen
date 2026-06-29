export default function Loading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200" />
          <div className="absolute inset-0 rounded-full border-4 border-t-[var(--primary)] animate-spin" />
        </div>
        <p className="text-lg text-zinc-500 font-body animate-pulse">
          Seite wird geladen...
        </p>
      </div>
    </main>
  );
}
