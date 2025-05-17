export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="text-4xl md:text-5xl font-serif tracking-wider text-primary">
            POCO A PETIT
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 