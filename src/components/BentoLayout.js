import BentoCard from "./BentoCard";

export default function BentoLayout({ id, eyebrow, title, cards }) {
  return (
    <div className="bg-[#364f6b] py-24 sm:py-32" id={id}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-[#fce38a]">{eyebrow}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {cards.map((card) => (
                <BentoCard key={card.value} {...card} />
            ))}
        </div>
      </div>
    </div>
  )
}
