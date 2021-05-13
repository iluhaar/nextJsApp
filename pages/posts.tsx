import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import { Mypost } from "../interfaces/post";
import { NextPageContext } from "next";
interface PostPageProps {
  posts: Mypost[]
}

export default function Posts({ posts: serverPosts }:PostPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const responce = await fetch(`${process.env.API_URL}/posts`);
      const data = await responce.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);
  if (!posts) {
    return (
      <MainLayout>
        <p>Loading..</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Posts Page"}>
      <h1>There will be a posts </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const responce = await fetch(`http://localhost:4200/posts`);
  const posts = await responce.json();

  return {
    posts: posts,
  };
};
