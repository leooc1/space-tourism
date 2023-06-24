interface LayoutProps {
    children: React.ReactNode,
    bg: string
}

import Head from "next/head"
import Header from "./Header"

export default function Layout(props: LayoutProps) {

    const image = props.bg

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
            </Head>
            {image === 'home' ? <div className={`bg-no-repeat bg-cover bg-neutral-900
                    md:bg-[url(/home/background-home-desktop.jpg)]
                    sm:bg-[url(/home/background-home-tablet.jpg)]
                    bg-[url(/home/background-home-mobile.jpg)]`}>
                <Header />
                {props.children}
            </div> : null}
            {image === 'destination' ? <div className={`bg-no-repeat bg-cover bg-neutral-900 
                    md:bg-[url(/destination/background-destination-desktop.jpg)] 
                    sm:bg-[url(/destination/background-destination-tablet.jpg)] 
                    bg-[url(/destination/background-destination-mobile.jpg)]`}>
                <Header />
                {props.children}
            </div> : null}
            {image === 'crew' ? <div className={`bg-no-repeat bg-cover bg-neutral-900
                    md:bg-[url(/crew/background-crew-desktop.jpg)]
                    sm:bg-[url(/crew/background-crew-tablet.jpg)]
                    bg-[url(/crew/background-crew-mobile.jpg)]`}>
                <Header />
                {props.children}
            </div> : null}
            {image === 'technology' ? <div className={`bg-no-repeat bg-cover bg-neutral-900
                    md:bg-[url(/technology/background-technology-desktop.jpg)]
                    sm:bg-[url(/technology/background-technology-tablet.jpg)]
                    bg-[url(/technology/background-technology-mobile.jpg)]`}>
                <Header />
                {props.children}
            </div> : null}
        </>
    )
}