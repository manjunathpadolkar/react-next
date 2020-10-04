import Head from 'next/head'
import TheSignup from '../components/auth/the-signup.js'

export default function Home() {
  return (
    <div>
        <Head>
            <title>Signup</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <TheSignup/>
        </div>
    </div>
  )
}
