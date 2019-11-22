//Link API
import Link from 'next/Link';

const Index = () => (
    <div>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;