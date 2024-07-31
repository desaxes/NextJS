import Link from "next/link"
import s from '../styles/link.module.css'
import MainContainer from "../components/MainContainer"
const Users = ({ users }) => {
    return (
        <>
            <MainContainer keywords={'users page'}>
                <h1>Users Page</h1>
                <ul>
                    {users.chars.map(e => <li key={e.id}>
                        <Link href={'/users/' + e.id}>
                            <div className={s.link}>{e.name}</div>
                        </Link>
                    </li>)}
                </ul>
            </MainContainer>
        </>
    )
}

export default Users

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3030/characters')
    const users = await res.json()
    return {
        props: { users }
    }
}