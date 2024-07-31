import { useRouter } from "next/router"
import s from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer"
const User = ({ user }) => {
    const { query } = useRouter()
    return (
        <>
            <MainContainer keywords={user.name}>
                <div className={s.user}>
                    <h1>User-{query.id}</h1>
                    <h1>Name-{user.name}</h1>
                </div>
            </MainContainer>
        </>
    )
}
export default User

export async function getServerSideProps({ params }) {
    console.log(params)
    const res = await fetch(('https://jsonplaceholder.typicode.com/users/' + params.id))
    const user = await res.json()
    return {
        props: { user }
    }
}