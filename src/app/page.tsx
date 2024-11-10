import { getPythonCards } from "@/lib/api";
import { PythonCard } from "@/types/payload-types";

export default async function Home() {
  const cards: PythonCard[] = await getPythonCards();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {cards.map((card) => (
          <div key={card.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p>{card.description[0]?.children[0]?.text}</p>
            <p>Category: {card.category}</p>
            <pre className="bg-gray-100 p-2 mt-2 rounded">
              <code>{card.codeExample}</code>
            </pre>
          </div>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
