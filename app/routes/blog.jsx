import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";


import styles from "~/styles/blog.css";
import ListadoPost from "../components/listadoPost";

export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLa Blog de Musica y venta de guitarras'
    }
}


export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoPost
        posts={posts}
      />
    </main>
  );
};

export default Blog;
