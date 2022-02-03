import React from 'react';
import "./Header.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const Header = () => {
    return(
        <div className='HeaderContain'>
            <div>Logo</div>
            <div className='Navs'>
                <a href="#" > Home</a>
                <a href="#" > About</a>
                <a href="#" > Contact Us</a>
            </div>
            <div className='Burger'>
            <MenuOpenIcon />
            </div>
           
        </div>
    )
}
export default Header