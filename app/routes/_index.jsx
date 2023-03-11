import { useLoaderData } from "@remix-run/react";

import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/post.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "../components/listadoGuitarras";
import ListadoPost from "../components/listadoPost";
import Curso from "../components/curso";

import stylesGuitarras from "../styles/guitarras.css";
import stylePost from "../styles/blog.css";
import styleCurso from "../styles/curso.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylePost,
    },
    {
      rel: "stylesheet",
      href: styleCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPost posts={posts} />
      </section>
    </>
  );
};

export default Index;
