import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/post.server'
import { formatearFecha } from "~/utils/helpers"

import styles from "~/styles/blog.css";


export function meta({data}) {

    if(!data) return {title: 'GuitarLA - Post no encontrada'}


    return {
        title: `GuitarLA - ${data.titulo}`,
        descripcion:`Guitarras, post ${data.titulo}`
    }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({params}){

    const { postUrl } = params;
    const post = await getPost(postUrl);

    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post.data[0].attributes;
}

const PostUrl = () => {

    const post = useLoaderData();

    const {contenido, titulo, imagen, publishedAt} = post;

    return (
        <article className='contenedor post mt-3'>
                <img src={imagen.data.attributes.url} alt={`imagen blog ${titulo }`} className="imagen" />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
             
            </div>
            
        </article>
    );
}

export default PostUrl;
