import Head from 'next/head'
import TheSignin from '../components/auth/the-signin.js'

export default function Home() {
  return (
    <div>
        <Head>
            <title>Signup /Signin</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <TheSignin/>
        </div>
    </div>
  )
}
