import styles from '../../styles/Home.module.css'
import TheHeader from './../partials/the-app-header.js'
import TheFooter from './../partials/the-footer.js'

function App({ children }) {
    return <div className={styles.container}>
        <TheHeader/>
        {children}
        <TheFooter/>
    </div>
}

export default App