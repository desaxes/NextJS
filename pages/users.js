import Link from "next/link"
import s from '../styles/link.module.css'
import MainContainer from "../components/MainContainer"
const Users = ({ users }) => {
    return (
        <>
            <MainContainer keywords={'users page'}>
                <h1>Users Page</h1>
                <ul>
                    {users.map(e => <li key={e.id}>
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
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return {
        props: { users }
    }
}