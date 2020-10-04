import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function () {

    return (<div>
        <Link href="/"><a className={styles.headerlink}>Home</a></Link>
        
        <Link href="/about-us"><a className={styles.headerlink}>About Us</a></Link>

        <Link href="/blogs"><a className={styles.headerlink}>Blog</a></Link>

        <Link href="/faq"><a className={styles.headerlink}>FAQ</a></Link>

        <Link href="/contact-us"><a className={styles.headerlink}>Contact</a></Link>

        <Link href="/signin"><a className={styles.headerlink}>Sign In</a></Link>

        <Link href="/signup"><a className={styles.headerlink}>Sign Up</a></Link>
    </div>)

}