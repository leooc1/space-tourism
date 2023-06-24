import Layout from "@/components/Layout"
import Image from "next/image"
import Head from "next/head"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function Technology() {
    return (
        <>
            <Head>
                <title>Space Tourism | Technology</title>
            </Head> 
            <Layout bg='technology'>
                <main className={`flex pt-10 min-h-screen flex-col items-center ${poppins.className}
                                md:flex-row md:items-start `}>
                    <section className="w-1/2 flex flex-col items-center 
                                                        sm:pl-4">
                        <h2 className="pb-14 float-left uppercase text-white text-xl tracking-widest text-center
                                        md:pl-7 md:text-left">
                            <span className="text-neutral-500 font-bold tracking-widest">03 </span>
                            space launch 101</h2>
                    </section>
                    <section className="flex mt-10 pb-8 justify-end h-72 
                                        md:w-1/2">
                        <Image className="w-96 h-fit" src="/technology/image-launch-vehicle-portrait.jpg" alt="" width={300} height={300} />
                    </section>
                </main>
            </Layout>
        </>
    )
}