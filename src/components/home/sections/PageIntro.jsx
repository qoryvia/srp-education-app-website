export default function PageIntro({ title, description }) {
  return (
    <main className="px-5 xl:px-40 min-h-[280px] py-16">
      <p className="eyebrow">Evergreen University</p>
      <h1 className="h-section mt-2">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </main>
  );
}
