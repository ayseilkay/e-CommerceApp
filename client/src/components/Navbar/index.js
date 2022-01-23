import styles from './styles.module.css'
import reset from './reset.css'
import {Link} from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { useBasket } from '../../contexts/BasketContext'

function Navbar() {

    const{ loggedIn,user}= useAuth();
    const{items}=useBasket();
    console.log(loggedIn)

    return (
        <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to="/">eCommerce</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
        </div>
        <div className={styles.right}>
        {
            !loggedIn && <>
            <Link to="/signin">
            <Button colorScheme='green'>Login</Button>
            </Link>
            <Link to="/signup">
            <Button colorScheme='blue'>Register</Button>
            </Link>
            </>
        }
        {
            loggedIn && <>
            {
            items.length >0 && (
                <Link to='/basket'>
                    <Button colorScheme="orange" variant="outline">
                        Basket({items.length})
                    </Button>
                </Link>
            )
            }

            {
                user?.role === 'admin' && (
                    <Link to='/admin'>
                        <Button colorScheme="orange" variant="ghost">Admin</Button>
                    </Link>
                )
            }

            <Link to="/profile">
            <Button colorScheme='orange'>Profile</Button>
            </Link>
            </>
        }
        
        </div>
        </nav>
    )
}

export default Navbar
