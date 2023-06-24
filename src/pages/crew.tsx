import Layout from "@/components/Layout"
import Image from "next/image"
import Head from "next/head"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function Crew() {
    const [dados, setDados] = useState<any>(null)
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setDados(data)
            })
            .catch(err => console.log(err))
    }, [dados])
    console.log(dados)

    return (
        <>
            <Head>
                <title>Space Tourism | Crew</title>
            </Head>
            <Layout bg='crew'>
                <main className={`flex pt-10 min-h-screen flex-col items-center ${poppins.className}
                                md:flex-row md:items-start `}>
                    <section className="w-1/2 flex flex-col items-center 
                                                        sm:pl-4">
                        <h2 className="pb-14 float-left uppercase text-white text-xl tracking-widest text-center
                                        md:pl-7 md:text-left">
                            <span className="text-neutral-500 font-bold tracking-widest">02 </span>
                            meet your crew</h2>
                        <section className="md:w-4/5 w-full text-center md:text-left">
                            <h3 className="mb-5 text-neutral-300 text-2xl font-light uppercase tracking-widest">{dados?.crew[index].role}</h3>
                            <h3 className="my-5 text-white text-4xl uppercase font-serif tracking-widest">{dados?.crew[index].name}</h3>
                            <p className="mt-5 text-white text-lg font-extralight">{dados?.crew[index].bio}</p>
                        </section>
                        <div className="mt-10 w-2/5 flex justify-evenly">
                            <button className={`p-3 rounded-full ${index === 0 ?'bg-white btn-crew outline-4 outline-white outline-double':'bg-neutral-500'}`} onClick={()=>setIndex(0)}></button>
                            <button className={`p-3 rounded-full ${index === 1 ?'bg-white btn-crew outline-4 outline-white outline-double':'bg-neutral-500'}`} onClick={()=>setIndex(1)}></button>
                            <button className={`p-3 rounded-full ${index === 2 ?'bg-white btn-crew outline-4 outline-white outline-double':'bg-neutral-500'}`} onClick={()=>setIndex(2)}></button>
                            <button className={`p-3 rounded-full ${index === 3 ?'bg-white btn-crew outline-4 outline-white outline-double':'bg-neutral-500'}`} onClick={()=>setIndex(3)}></button>
                        </div>
                    </section>
                    <section className="flex mt-10 pb-8 justify-center h-72 
                                        md:w-1/2">
                        <Image src={dados?.crew[index].images.png} className="h-fit" alt="" width={350} height={350} />
                    </section>
                </main>
            </Layout>
        </>
    )
}