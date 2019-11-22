//Link API
import Link from 'next/Link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout'

const Page = () => <p>Hello Next.js</p>

export default withLayout(Page);