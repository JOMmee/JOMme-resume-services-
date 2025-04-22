
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-10">
      <Head>
        <title>JOMme Resume Services</title>
      </Head>
      <header className="text-center space-y-4">
        <img src="/logo.png" alt="JOMme Logo" width="100" height="100" className="mx-auto" />
        <h1 className="text-4xl font-bold">JOMme Resume Services</h1>
        <p className="text-lg text-gray-300">Resumes that work as hard as you do.</p>
      </header>

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Ready to Upgrade Your Resume?</h2>
        <p className="text-gray-400">Fiverr gig coming soon — stay tuned!</p>
        <button disabled className="bg-gray-600 text-white px-6 py-2 rounded-full text-lg font-medium">
          Coming Soon on Fiverr
        </button>
        <a href="mailto:jomithjomme@gmail.com" className="block text-sm text-gray-400 pt-4">
          Or email me: jomithjomme@gmail.com
        </a>
      </section>

      <footer className="text-center text-gray-500 text-sm pt-10">
        &copy; {new Date().getFullYear()} JOMme Resume Services. Built by Jomith.
      </footer>
    </div>
  );
}
