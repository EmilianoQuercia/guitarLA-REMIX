import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({params}) {

    const {guitarraUrl} = params;
    
    const guitarra = await getGuitarra(guitarraUrl);
    return guitarra
}

const GuitarraUrl = () => {

    const guitarra = useLoaderData();

    return (
        <div>
            $guitarraUrl
        </div>
    );
}

export default GuitarraUrl;
