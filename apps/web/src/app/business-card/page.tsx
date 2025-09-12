export default function BusinessCard() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <main className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-background/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/business-card-image.JPG" 
                  alt="MOZUK Business Card" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                MOZ<span className="text-[var(--brand)]">U</span>K
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-black/70 dark:text-white/70 mb-6 sm:mb-8 font-medium">
                Build, pitch and ship with MOZUK.
              </p>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl text-black/60 dark:text-white/60">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-[var(--brand)]">🇱🇧</span>
                  Lebanon: +961 7884 7997
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-[var(--brand)]">🇧🇬</span>
                  Bulgaria: +359 87 7282470
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-[var(--brand)]">✉️</span>
                  info@mozuk.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
