//core
import { useState } from 'react';

//custom
import Button from './Button';
import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Logo from './Logo';
import NavDesktop from './NavDesktop';
import NavOverlay from './NavOverlay';

import styles from './header.module.scss';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); //isMenuVisisble holds true or false, setMenuVisible setter function that is tethered to variable holding t/f value 
    return <header className={styles.header}>
           <Link href="/">
                <Logo />
           </Link>
            <ButtonUI 
                icon="menu" 
                clickHandler={() => {
                    setMenuVisible(true);
                }}
            />
            <NavDesktop />
            {isMenuVisible && //if left thing is true it will give you right thing BUT if false, it will exclude 
                <NavOverlay 
                    closeHandler={() => {
                        setMenuVisible(false);
                    }}
                />
            }  
    </header> 
}

export default Header //make available to be imported anywhere throughout my app