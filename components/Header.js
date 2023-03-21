import { useState } from 'react';
import Button from './Button';
import NavOverlay from './NavOverlay';

import styles from './header.module.css';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); //isMenuVisisble holds true or false, setMenuVisible setter function that is tethered to variable holding t/f value 
    return <header className={styles.header}>
            <Button 
                label="Menu"
                clickHandler={() => {
                    setMenuVisible(true);
                }}
            />
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