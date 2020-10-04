import Head from 'next/head'
import Layout from '../components/layouts/default.js'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'

function ContactUs() {
    return (
        <Layout>
        <div>
          <Head>
              <title>Contact Us</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <Typography variant="h1" gutterBottom>Contact Us</Typography>
            <div>
              <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended. You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn’t considered an honor, it was a public service.</p>
              <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended. You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn’t considered an honor, it was a public service.</p>
            </div>
          </div>
        </div>
      </Layout>
    )
}

export default ContactUs
  