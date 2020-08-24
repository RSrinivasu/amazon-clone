import React from 'react';

import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBucket from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';


function Header(){
    let [ {basket} ] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
                <img className="header_log" src="https://economictranscript.files.wordpress.com/2019/09/amazon-625x352.jpg" />
            </Link>
            <div className="header_search">
                <input className="header_search_input" type="text" />
                <SearchIcon className="header_search_icon" />
            </div>
            
            <Link to="/login" className="header_link">
                    <div className="header_link_options"> 
                        <span className="header_link_option_one">Hello, Srinu</span>
                        <span className="header_link_option_two">Sign In</span>
                    </div>
            </Link>
            <Link to="/" className="header_link">
                    <div className="header_link_options"> 
                        <span className="header_link_option_one">Returns</span>
                        <span className="header_link_option_two">&Orders</span>
                    </div>
            </Link>

            <Link to="/" className="header_link">
                    <div className="header_link_options"> 
                        <span className="header_link_option_one">Try</span>
                        <span className="header_link_option_two">Prime</span>
                    </div>
            </Link>
           
           <Link to="/checkout" className="header_link">
                <div className="header_link_basket">
                    <ShoppingBucket />
                    <span className="header_link_basket_count">{basket.length}</span>
                </div>
            </Link> 
           
        
        </nav>
    );
}


export default Header;