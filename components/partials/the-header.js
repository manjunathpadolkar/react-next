import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import TheHeaderLinks from './the-header-links.js'
import styles from '../../styles/Home.module.css'

export default function () {
  return (
    <AppBar className={styles.appBar} position="fixed">
      <Toolbar>
        <Typography variant="h6" component="h1" gutterBottom>
          MyApp.Com
        </Typography>
        <TheHeaderLinks/>
      </Toolbar>
    </AppBar>
  );
}