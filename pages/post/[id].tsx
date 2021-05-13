import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MainLayout } from "../../layouts/mainLayout";
import { NextPageContext } from "next";
import { Mypost } from "../../interfaces/post";

interface PostPageProps {
  post: Mypost
}

export default function Post({ post: serverPost }:PostPageProps) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const responce = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await responce.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!post) {
    return (
      <MainLayout>
        <p>Loading ..</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>{post.title} </h1>
      <hr />
      <p> {post.body}</p>
      <Link href={"/posts"}>
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}
interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}
Post.getInitialProps = async ({ query, req }: NextPageContext) => {
  if (!req) {
    return {
      post: null,
    };
  }
  const responce = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await responce.json();
  return {
    post,
  };
};
