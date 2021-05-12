import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
export default function Posts({ posts }) {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     async function load() {
    //         const responce = await fetch('http://localhost:4200/posts')
    //         const json = await responce.json()
    //         setPosts(json)
    //     }
    //     load()
    // }, [[]]);
    return (

        <MainLayout title={'Posts Page'}>
            <h1>There will be a posts </h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}



Posts.getInitialProps = async () => {
    const responce = await fetch('http://localhost:4200/posts')
    const posts = await responce.json()

    return {
        posts
    }

}