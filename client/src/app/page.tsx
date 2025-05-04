// src/app/page.tsx
export default function Home() {
  return (
    <section className="container mx-auto py-6" aria-labelledby="home-title">
      <h1 id="home-title" className="text-3xl font-bold">Welcome to My App</h1>
      <p className="mt-4">This is the homepage content, designed to work with the responsive sidebar.</p>
    </section>
  );
}