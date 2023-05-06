//file to use on every single page to bring in redundant info w/o you having to manually import (footer, header, brand stuff, etc.)
//core components from react
import { Fragment } from "react"

//custom components
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
    return <Fragment> 
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment> //generic Fragment (temporary placeholder) box wrapping around everything that comes thru
}
export default Layout