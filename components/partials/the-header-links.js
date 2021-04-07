import Link from 'next/link'
import Button from '@material-ui/core/Button';
import styles from '../../styles/Home.module.css'

export default class TheHeaderLinks extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            links: [
                {name: 'Home', link: '/'},
                {name: 'About Us', link: '/about-us'},
                {name: 'Blog', link: '/blogs'},
                {name: 'FAQ', link: '/faq'},
                {name: 'Contact', link: '/contact-us'},
                {name: 'Sign In', link: '/signin'},
                {name: 'Sign Up', link: '/signup'}
            ]
        }
    }

    render() {
        const listItems = this.state.links.map(function(item){
            return <Link href={item.link}>
                <Button color="inherit">
                    {item.name}
                </Button>
            </Link>
        })
        return (<div className={styles.headerlink}>
            {listItems}
            <Button color="inherit">Login</Button>
        </div>)
    }

}