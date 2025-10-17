// import Head from 'next/head'
import Terminal from '../components/Terminal.tsx';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>CS Student Portfolio</title>
      </Head> */}
      <main className="p-4 md:p-8">
        <Terminal />
      </main>
    </>
  )
}
