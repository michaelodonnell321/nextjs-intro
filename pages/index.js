//Link API
import Link from 'next/Link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout'

export default function Index() {
    return (
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    )
}