import Head from "next/head"
import A from "./A"

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={'nextjs' + keywords}></meta>
                <title>NEXTJS</title>
            </Head>
            <div className="navbar">
                {/* <Link href="/">
                    <div className="link">Main</div>
                </Link>
                <Link href="/users">
                    <div className="link">Users</div>
                </Link> */}
                <A href="/" text='Main' />
                <A href="/users" text='Users' />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                        background:red;
                        padding:15px;
                        display:flex;
                        gap:20px;
                    }
                `}
            </style>
        </>
    )
}
export default MainContainer
