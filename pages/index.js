import Head from 'next/head';
import Create from '../components/Create';
import DisplayEntries from '../components/DisplayEntries';


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>

      <main>
        <h1 className="text-center text-4xl font-bold my-4">Welcome to My Website</h1>
        <div className="flex justify-center">
         
          <Create />
          <DisplayEntries/>
        </div>
      </main>
    </div>
  );
}
