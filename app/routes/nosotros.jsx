import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return {
        title: 'GuitarLA - Sobre Nosotros',
        description: 'Venta de guitarra, blog de Musica y mas...'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>Donec nec diam malesuada, volutpat metus nec, varius metus. Vivamus cursus congue turpis sit amet efficitur. Sed tristique purus sit amet urna convallis interdum. Donec et mauris urna. Nam libero dolor, pellentesque id gravida sit amet, tempus nec neque. Praesent mollis tincidunt orci vitae accumsan. Nam pharetra lacus massa, eu mollis metus varius vel. Donec tempor vulputate nunc sit amet pharetra.</p>

                    <p> Cras vulputate, turpis eu facilisis rhoncus, purus est viverra est, convallis consequat neque nunc id tortor. Vestibulum et velit mollis, ullamcorper est scelerisque, finibus orci. Integer euismod et risus ut hendrerit. Aliquam iaculis imperdiet lacus, at lobortis purus congue et. In in nisi iaculis, cursus erat at, tempus eros. Sed tincidunt vulputate ipsum et aliquam. Cras risus arcu, volutpat vitae rutrum vel, tincidunt eget risus. Nulla in volutpat leo.</p>

                   
                </div>
            </div>
        </main>
    );
}

export default Nosotros;
