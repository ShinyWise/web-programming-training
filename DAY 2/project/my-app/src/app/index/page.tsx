// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
export default function Home() {
  return (
    <>
      <Head>
        <title>Frans Winata | Portfolio</title>
        <meta name="description" content="Portfolio of Frans Winata, a CS student & web developer." />
      </Head>
    <Navbar></Navbar>

      <main className="min-h-screen flex items-center justify-center bg-blue-200 px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Frans 👋</h1>
          <p className="text-lg text-gray-700 mb-6">
            I'm a Computer Science student at Binus University, passionate about web development and user experience.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/about" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              About Me
            </Link>
            <Link href="/projects" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Projects
            </Link>
            <Link href="/contact" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
