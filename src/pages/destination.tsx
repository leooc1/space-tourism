import Layout from "@/components/Layout"
import Image from "next/image"
import Head from "next/head"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function Destination() {
    const [dados, setDados] = useState<any>(null)
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setDados(data)
                // console.log(data)
                // console.log(dados)
            })
            .catch(err => console.log(err))
    }, [dados, index])

    return (
        <>
            <Head>
                <title>Space Tourism | Destination</title>
            </Head>
            <Layout bg='destination'>
                <main className={`flex pt-10 min-h-screen flex-col items-center ${poppins.className}
                                md:flex-row md:items-start `}>
                    <section className="w-1/2 flex flex-col items-center 
                                        sm:pl-4">
                        <h2 className="pb-14 float-left uppercase text-white text-xl tracking-widest text-center
                        md:pl-7 md:text-left">
                            <span className="text-neutral-500 font-bold tracking-widest">01 </span>
                            pick your destination</h2>
                        <Image src={dados?.destinations[index].images.png} alt="" width={350} height={350} />
                    </section>
                    <section className="flex flex-col mt-10 pb-8 items-center h-72 
                                        md:w-1/2">
                        <nav className="w-80 flex justify-around">
                            <button onClick={() => setIndex(0)} className={`uppercase text-white h-10 leading-5 ${index === 0 ? 'border-b-2 btn-animated' : null}`}>moon</button>
                            <button onClick={() => setIndex(1)} className={`uppercase text-white h-10 leading-5 ${index === 1 ? 'border-b-2 btn-animated' : null}`}>mars</button>
                            <button onClick={() => setIndex(2)} className={`uppercase text-white h-10 leading-5 ${index === 2 ? 'border-b-2 btn-animated' : null}`}>europa</button>
                            <button onClick={() => setIndex(3)} className={`uppercase text-white h-10 leading-5 ${index === 3 ? 'border-b-2 btn-animated' : null}`}>titan</button>
                        </nav>
                        <h3 className="text-white uppercase text-7xl font-serif my-6 tracking-widest">{dados?.destinations[index].name}</h3>

                        <p className="text-white text-center font-extralight w-3/4
                        md:text-left ">{dados?.destinations[index].description}</p>
                        <div className="w-3/4 bg-neutral-700 p-px my-6"></div>
                        <section className="w-3/4 flex flex-col items-center gap-4
                        md:flex-row md:items-start md:gap-0">
                            <div className="uppercase font-light w-1/2 text-3xl text-white">
                                <p className={`font-light text-neutral-300 text-base`}>avg. distance</p>
                                <p>{dados?.destinations[index].distance}</p>
                            </div>
                            <div className="uppercase font-light w-1/2 text-3xl text-white">
                                <p className={`font-light text-neutral-300 text-base`}>est. travel time</p>
                                <p>{dados?.destinations[index].travel}</p>
                            </div>
                        </section>
                    </section>
                </main>
            </Layout>
        </>
    )
}