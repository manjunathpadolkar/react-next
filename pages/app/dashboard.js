import Head from 'next/head'
import AppLayout from '../../components/layouts/app.js'
import styles from '../../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'

function Dashboard() {
    return (
        <AppLayout>
        <div>
          <Head>
              <title>Dashboard</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <Typography variant="h1" gutterBottom>Dashboard</Typography>
            <div>
              <p>Welcome to your dashboard. Cheer !</p>
            </div>
          </div>
        </div>
      </AppLayout>
    )
}

export default Dashboard
  