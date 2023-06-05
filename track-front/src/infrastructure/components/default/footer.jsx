import React,{useState} from 'react';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Footer = () => {
    const logout = () => {
        localStorage.removeItem("token");
    }
    
    return (
        <div>
            <div className='bg-indigo-400 w-full h-7 fixed inset-x-0 bottom-0 flex justify-end items-center'>
            <Link onClick={logout} to='/' className='p-2 text-xl '><HiArrowRightOnRectangle/></Link>
            </div>
        </div>
    );
}

export default Footer;
