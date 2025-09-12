"use client";

export default function BusinessCard() {
  // Business card component with contact information
  const contactInfo = {
    name: "Michel Akl",
    title: "Founder & CEO",
    lebanon: "+961 78 847 997",
    bulgaria: "+359 87 7282470",
    email: "michel.akl@mozuk.net"
  };

  const addToContacts = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
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
    <div className="fixed inset-0 overflow-hidden">
      <main className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-background/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-8 max-w-4xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image on the left */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <img 
                  src="/business-card-image.jpg" 
                  alt="Michel Akl - MOZUK" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div className="flex-1 text-center md:text-left max-w-[192px]">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                <span className="text-white dark:text-white">{contactInfo.name}</span>
              </h1>
              <p className="text-lg text-[var(--brand)] mb-4 font-medium">
                {contactInfo.title}
              </p>
              
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-black dark:text-white">Lebanon</p>
                  <p className="text-[var(--brand)]">{contactInfo.lebanon}</p>
                </div>
                <div>
                  <p className="text-black dark:text-white">Bulgaria</p>
                  <p className="text-[var(--brand)]">{contactInfo.bulgaria}</p>
                </div>
                <div>
                  <p className="text-black dark:text-white">Email</p>
                  <p className="text-[var(--brand)]">{contactInfo.email}</p>
                </div>
              </div>

              {/* Mobile Contact Button */}
              <button
                onClick={addToContacts}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--brand)] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition md:hidden"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

