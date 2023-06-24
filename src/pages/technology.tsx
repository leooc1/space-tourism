import Layout from "@/components/Layout"
import Image from "next/image"
import Head from "next/head"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function Technology() {
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
                <title>Space Tourism | Technology</title>
            </Head>
            <Layout bg='technology'>
                <main className={`flex pt-10 min-h-screen flex-col items-center ${poppins.className}
                                md:flex-row md:items-start `}>
                    <section className="flex flex-col items-center w-full px-1 text-center
                                        md:w-1/2 md:px-0 sm:pl-4 md:text-left ">
                        <h2 className="pb-14 float-left uppercase text-white text-xl tracking-widest text-center
                                        md:pl-7 md:text-left">
                            <span className="text-neutral-500 font-bold tracking-widest">03 </span>
                            space launch 101</h2>
                        <section className="flex flex-col-reverse sm:flex-row">
                            <section className="flex flex-row justify-around sm:justify-start sm:flex-col px-7 ">
                                <button onClick={()=>setIndex(0)} className={`rounded-full my-2 text-2xl w-16 h-16 ${index === 0?'bg-white btn-tech':'bg-transparent text-white border-white border-[1px]'}`}>1</button>
                                <button onClick={()=>setIndex(1)} className={`rounded-full my-2 text-2xl w-16 h-16 ${index === 1?'bg-white btn-tech':'bg-transparent text-white border-white border-[1px]'}`}>2</button>
                                <button onClick={()=>setIndex(2)} className={`rounded-full my-2 text-2xl w-16 h-16 ${index === 2?'bg-white btn-tech':'bg-transparent text-white border-white border-[1px]'}`}>3</button>
                            </section>
                            <section>
                                <h2 className="uppercase font-extralight text-sm text-white">the terminology_</h2>
                                <h3 className="text-white text-4xl uppercase font-serif tracking-widest">{dados?.technology[index].name}</h3>
                                <p className="mt-5 text-white text-base font-extralight">{dados?.technology[index].description}</p>
                            </section>
                        </section>
                    </section>
                    <section className="flex mt-10 pb-8 justify-end h-72 
                                        md:w-1/2">
                        <Image src={dados?.technology[index].images.portrait} className="w-96 h-fit" alt="" width={350} height={350} />
                    </section>
                </main>
            </Layout>
        </>
    )
}