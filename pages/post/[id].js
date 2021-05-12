import { useRouter } from 'next/router'

export default function Post(posts) {
    const router = useRouter()
    return (
        <>
        <h1>Post {router.query.id} </h1>
            {/* {posts.map(post => (
                <li key={post.id}>
                  <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                    <a>{post.title}{post.body}</a>
                  </Link>
                </li>
              ))} */}
        </>)

}

// Post.getInitialProps = async () => {
//     const responce = await fetch(`http://localhost:4200/posts/${router.query.id}`)
//     const posts = await responce.json()
//     return {
//         posts
//     }

// }