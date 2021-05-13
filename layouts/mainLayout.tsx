import Link from "next/link";
import Head from 'next/head';
export function MainLayout({ children, title = 'SSR using NextJs' }) {
    return (
        <>
            <Head>
                <title> {title} | My first SSR app with Next.JS </title>
                <meta name="keywords" content="ssr, github, potfolio, Rudyi Illia, reactJS" />
                <meta name="description" content="SSR application with NextJS" />
                <meta charSet="utf-8" />
            </Head>

            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
                height: 45px;
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                display: flex;
                background-color: cornflowerblue;
                justify-content: space-around;
                align-items:center;
            }
            nav a {
                color: #fff;
                text-decoration:none;
                font-family: Roboto;    
            }
            main {
                margin-top:45px;
                padding-top:1rem;
            }
        `}</style>
        </>
    )

}