import Head from 'next/head'; import { motion } from 'framer-motion';

export default function Home() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 font-sans"> <Head> <title>JOMme Resume Services</title> </Head>

<motion.header 
    className="text-center space-y-4"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img 
      src="/logo.png" 
      alt="JOMme Logo" 
      className="mx-auto w-24 h-24 rounded-full border-4 border-white shadow-md" 
    />
    <h1 className="text-5xl font-extrabold tracking-wide">JOMme Resume Services</h1>
    <p className="text-xl text-gray-300">Resumes that work as hard as you do.</p>
  </motion.header>

  <motion.main 
    className="max-w-3xl mx-auto text-center mt-12 space-y-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 1 }}
  >
    <section>
      <h2 className="text-3xl font-semibold mb-4">Ready to Upgrade Your Resume?</h2>
      <p className="text-gray-400 text-lg">Fiverr gig coming soon — stay tuned!</p>
      <button
        disabled
        className="bg-gray-700 text-white px-8 py-3 mt-6 rounded-full text-lg font-semibold shadow-lg cursor-not-allowed opacity-80"
      >
        Coming Soon on Fiverr
      </button>
    </section>

    <section>
      <p className="text-lg text-gray-400">Or reach out directly:</p>
      <a
        href="mailto:jomithjomme@gmail.com"
        className="text-blue-400 underline hover:text-blue-200 text-xl"
      >
        jomithjomme@gmail.com
      </a>
    </section>
  </motion.main>

  <motion.footer 
    className="text-center text-gray-500 text-sm pt-16"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
  >
    &copy; {new Date().getFullYear()} JOMme Resume Services. Built with heart by Jomith.
  </motion.footer>
</div>

); }

