import Layout from "@/components/Layout"
import { Poppins } from "next/font/google"
import Head from "next/head"


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <Layout bg='home'>
        <main className={`flex pt-24 min-h-screen flex-col items-center ${poppins.className}
      md:flex-row md:items-start`}>
          <section className="w-1/2 flex justify-center 
        sm:pl-4">
            <p className="text-white text-center font-light scale-90
          sm:w-96 sm:scale-100 md:text-justify">
              <span className="uppercase text-xl">So, you want to travel to</span>
              <br />
              <span className="uppercase font-serif text-[7.5rem]">Space</span>
              <br />
              Let’s face it; if you want to go to space , you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </section>
          <section className="flex items-end pb-8 justify-center h-72 
        md:w-1/2">
            <button className="uppercase h-52 w-52 bg-white text-2xl font-serif rounded-full"
              style={{ letterSpacing: '3px' }}>Explore</button>
          </section>
        </main>
      </Layout>
    </>
  )
}
