import Link from 'next/link'
import styles from '../../styles/Home.module.css'

function TheFooter() {
    return <footer className={styles.headerlink}>
        &#169; Copyright {new Date().getFullYear()} 
        &nbsp;&nbsp;<Link href="/"><a>app.com</a></Link>
    </footer>
}

export default TheFooter
