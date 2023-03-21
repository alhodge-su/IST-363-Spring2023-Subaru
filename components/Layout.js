//file to use on every single page to bring in redundant info w/o you having to manually import (footer, header, brand stuff, etc.)
import { Fragment } from "react"
import Footer from './Footer';
import Header from './Header';
import Link from 'next/link';


const Layout = ({children}) => {
    return <Fragment> 
        <Header />
        <nav>
            <ul>
                <li>
                    <Link href="/"> 
                        Home 
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Products
                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        <Footer />
    </Fragment> //generic Fragment (temporary placeholder) box wrapping around everything that comes thru
}
export default Layout