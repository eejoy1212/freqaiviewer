import React, { useState } from 'react';
import whiteLogo from './whitelogo.svg'
import styles from './AppBar.module.css'
import {RiMenuUnfoldLine} from "react-icons/ri";
import {RiMenuFoldLine} from "react-icons/ri";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import Moment from 'react-moment';
import 'moment/locale/ko';
export default function AppBar({menuOpen,setMenuOpen}) {
    const [seconds, setSeconds] = useState(Date.now());

    // useInterval
    setInterval(() => {
      setSeconds(Date.now());
    }, 1000);
    const handleMenu=()=>{
setMenuOpen(!menuOpen)
console.log(`메뉴오픈?? ${menuOpen}`);
    }
    const nowTime = Date.now()
    return (
        
        <div className={styles.AppBar}>
            <button className={styles.menu} onClick={handleMenu}>
            {menuOpen?<RiMenuUnfoldLine size='18px'/>:<RiMenuFoldLine size='18px'/>}
            </button>           
            <img src={whiteLogo} className={styles.logo} alt="logo" />
            <div className={styles.logAlert}>알람창 입니다!</div>
            <div className='clock'>
            <Moment >{nowTime}</Moment>;
            </div>
        </div>
    );
}
