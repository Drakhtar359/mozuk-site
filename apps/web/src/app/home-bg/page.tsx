import ServicesCarousel from "@/components/ServicesCarousel";
import SatisfactionStat from "@/components/SatisfactionStat";
import PerformanceLineStat from "@/components/PerformanceLineStat";

export default function HomeBg() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Създавайте, представяйте и доставяйте с
          <span className="text-[var(--brand)]"> MOZUK</span>.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
          Партнираме си с екипи, за да създаваме изключителни презентации (pitch decks),
          да изчистваме продуктовата стратегия, да анализираме данни за ценни инсайти
          и да документираме продукти, които потребителите обичат.
        </p>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 items-start">
          <SatisfactionStat />
          <PerformanceLineStat />
        </div>
      </section>

      <section id="services" className="py-14 border-t border-black/10 dark:border-white/10">
        <h2 className="text-2xl font-semibold">Услуги</h2>
        <div className="mt-6">
          <ServicesCarousel
            services={[
              { title: "Презентации за инвеститори", description: "Силни истории и ясни визуализации." },
              { title: "Продуктова стратегия", description: "Ясни пътни карти и прецизно позициониране." },
              { title: "Анализ на данни", description: "Инсайти, които водят до уверени решения." },
              { title: "Продуктова документация", description: "Документация, която въвежда и овластява потребителите." },
            ]}
            autoMs={3000}
          />
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-black/10 dark:border-white/10">
        <div className="rounded-2xl p-8 sm:p-10 bg-black text-white dark:bg.white dark:text-black">
          <h3 className="text-2xl font-semibold">Нека работим заедно</h3>
          <p className="mt-3 text-sm/6 opacity-80 max-w-prose">
            Разкажете ни за целите си. Отговаряме до 1 работен ден.
          </p>
          <a
            href="mailto:hello@mozuk.co"
            className="mt-6 inline-flex items-center rounded-md bg-[var(--brand)] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition"
          >
            hello@mozuk.co
          </a>
        </div>
      </section>
    </main>
  );
}


