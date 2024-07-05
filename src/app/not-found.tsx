import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
                <Image
                    src='/404.png'
                    alt="404 Not found"
                    width={300}
                    height={200}
                />
                <p>Sorry. Can not seem to find the page you are looking for.</p>
            </div>
            <Link href="/" style={{ textDecoration: 'none', color: 'blue' }}>
                Volver a la página de inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;
