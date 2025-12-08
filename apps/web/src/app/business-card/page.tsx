"use client";

export default function BusinessCard() {
  // Business card component with contact information
  const contactInfo = {
    name: "Michel Akl",
    title: "Founder & CEO",
    lebanon: "+961 78 847 997",
    bulgaria: "+359 87 7282470",
    email: "michel@mozuk.net"
  };

  const addToContacts = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:${contactInfo.name.split(' ')[1]};${contactInfo.name.split(' ')[0]};;;
TITLE:${contactInfo.title}
TEL:${contactInfo.lebanon}
TEL:${contactInfo.bulgaria}
EMAIL:${contactInfo.email}
ORG:MOZUK
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Michel Akl.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 overflow-hidden touch-none">
      <main className="h-screen w-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Minimalist Borderless Container */}
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <div className="w-[40vw] h-[40vw] sm:w-[35vw] sm:h-[35vw] md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] max-w-80 max-h-80 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/business-card-image.jpg"
                  alt="Michel Akl - MOZUK"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text on the right */}
            <div className="flex-1 text-center md:text-left w-full md:w-auto">
              <h1 className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold mb-1">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{contactInfo.name}</span>
              </h1>
              <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] text-[var(--brand)] mb-4 sm:mb-6 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                {contactInfo.title}
              </p>

              <div className="space-y-3 sm:space-y-4 text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.2vw]">
                <div>
                  <p className="text-white/40 uppercase text-xs tracking-wider mb-1">Lebanon</p>
                  <p className="text-white/90 font-medium">{contactInfo.lebanon}</p>
                </div>
                <div>
                  <p className="text-white/40 uppercase text-xs tracking-wider mb-1">Bulgaria</p>
                  <p className="text-white/90 font-medium">{contactInfo.bulgaria}</p>
                </div>
                <div>
                  <p className="text-white/40 uppercase text-xs tracking-wider mb-1">Email</p>
                  <p className="text-white/90 font-medium">{contactInfo.email}</p>
                </div>
              </div>

              {/* Add to Contacts Button */}
              <button
                onClick={addToContacts}
                className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-gray-100 text-black px-6 py-3 sm:px-8 sm:py-4 text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-base font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add to Contacts
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
