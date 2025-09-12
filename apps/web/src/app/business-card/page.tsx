export default function BusinessCard() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <main className="h-screen flex items-center justify-center px-5">
        <div className="bg-background/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 max-w-4xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <img 
                  src="/business-card-image.jpg" 
                  alt="MOZUK Business Card" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                MOZ<span className="text-[var(--brand)]">U</span>K
              </h1>
              <p className="text-lg text-black/70 dark:text-white/70 mb-6">
                Build, pitch and ship with MOZUK.
              </p>
              <div className="space-y-2 text-sm text-black/60 dark:text-white/60">
                <p>Lebanon: +961 7884 7997</p>
                <p>Bulgaria: +359 87 7282470</p>
                <p>Email: info@mozuk.net</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
