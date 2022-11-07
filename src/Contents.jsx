import React, { useEffect } from 'react';
import AlgorithmChart from './AlgorithmChart';
import BrushChart from './BrushChart';
import {RiAddLine} from "react-icons/ri";
import {RiCloseFill} from "react-icons/ri";
import Charts from './Charts';
import styles from "./Menu.module.css";
import { useState } from 'react';
import { MenuModel } from './model/MenuModel';
export default function Contents({menuOpen, setMenu}) {
    console.log(`오픈?? in Contents ${menuOpen}`);
    const [filterOpen,setFilter]=useState(false);
    const [filterKey,setFilterKey]=useState('');
    const [filterContent,setfilterContent]=useState('');
    const [filterContent2,setfilterContent2]=useState('');
    const menuModel= new MenuModel();
    const [chipList,setChipList]=useState([]);
    const list=[];

    // const [filterKey,setFilterKey]=useState({key:'',modal:<></>});
    // useEffect(()=>{
 
    //   menuModel.type=filterKey;
    // //   menuModel.contents=filterContents;
    //   console.log(menuModel);
    // },[filterKey,])
    const handleContents=(e)=>{
        setfilterContent(e.target.value)
        // setfilterContents( e.target.value);
        
        // setfilterContents({key:filterContents[key]});
        // if (key===2) {
            console.log(`>>>>>${filterContent}`);
            // setfilterContents( e.target.value);
            // console.log(`>>>>>>>>>${filterContents.length}`);
        // }
//         console.log(filterContents);
// // setfilterContents()
//         if (filterContents.key===key) {
            
//         }
    }
    const handleContents2=(e)=>{
        setfilterContent2(e.target.value)
        // setfilterContents( e.target.value);
        
        // setfilterContents({key:filterContents[key]});
        // if (key===2) {
            console.log(`>>>>>${filterContent2}`);
            // setfilterContents( e.target.value);
            // console.log(`>>>>>>>>>${filterContents.length}`);
        // }
//         console.log(filterContents);
// // setfilterContents()
//         if (filterContents.key===key) {
            
//         }
    }
    const handleApplyBtn=()=>{
        menuModel.type=filterKey;
        const contentsList=[filterContent,filterContent2];
        menuModel.contents=contentsList;
        // list.push(menuModel);
        list.append(menuModel)
        // menuModel.push({type:'aaa'})
        console.log(list);
        setChipList(...chipList,list);
        console.log(`>>>>>>>>>>>>>>>>>>>>>>`);
console.log(chipList);
        // setChipList(menuModel);
        // console.log(chipList);
    }
    const handleCancel=()=>{setFilterKey('');}
    const handleAddBtn=()=>{
setFilter(!filterOpen)
    };
    return (<>
    {menuOpen&&<div className={styles.menu}>
        <div className='filterArea'>
{/* {list.map((it)=>{<div>
    dddddddddd
</div>}
)} */}
        {/* <div className='filterChip'>
            Date  */}
            {/* <div className='filterContent'>is between</div> */}
            {/* 2022-11-01<div className='filterContent'>and */}
            {/* </div> */}
            {/* 2022-11-06
            <button className='filterDeleteBtn'>
        <RiCloseFill size='16px'/>
        </button>
        
        </div> */}
        <button className='filterAddBtn' onClick={handleAddBtn}>
        <RiAddLine size='16px'/>
        </button>
        {filterOpen&&
        <div className={styles.filterMenu}>
        <li className={styles.filterTile}  onClick={(e)=>{setFilterKey('Date'); console.log(filterKey);}}>Date</li>
        <li className={styles.filterTile}  onClick={(e)=>{setFilterKey('Time')}}>Time</li>
        <li className={styles.filterTile}  onClick={(e)=>{setFilterKey('Type')}}>Type</li>
        <li className={styles.filterTile} onClick={(e)=>{setFilterKey('Des')}}>Description</li>
    </div>}
    {
        filterKey==='Date'&&
        <div className={styles.filterSetting}>
            <div className='selectArea'>
            <input type="radio"/> is between
            </div>
           
        <div className='datePicker'>
        <input type="text"  key='1' onChange={handleContents} />and<input type="text" />
        </div>
        <div className='btnArea'>
        <button className='cancelBtn'>Cancel</button>
        <button className='applyBtn' onClick={handleApplyBtn}>Apply Filter</button>
        <script src="bubblestyle.js">
            
        </script>
        </div>
        </div>
    }
       {
        filterKey==='Time'&&
        <div className={styles.filterSetting}>
            <div className='selectArea'>
            <input type="radio"/> is between
            </div>
           
        <div className='datePicker'>
        <input type="text" />and<input type="text" />
        </div>
        <div className='btnArea'>
        <button className='cancelBtn' onClick={handleCancel}>Cancel</button>
        <button className='applyBtn'>Apply Filter</button>
        <script src="bubblestyle.js">
            
        </script>
        </div>
        </div>
    }
         {
        filterKey==='Type'&&
        <div className={styles.filterSetting}>
            <div className='selectArea'>
            <input type="radio"/> is contain
            </div>
           
        <div className='datePicker'>
        <input type="text" onChange={handleContents}/>
        </div>
        <div className='btnArea'>
        
        </div>
        <div className='selectArea'>
            <input type="radio"/> is not contain
            </div>
           
        <div className='datePicker'>
        <input type="text" onChange={handleContents2} />
        </div>
        <div className='btnArea'>
        <button className='cancelBtn'  onClick={handleCancel}>Cancel</button>
        <button className='applyBtn' onClick={handleApplyBtn}>Apply Filter</button>
        {/* <script src="bubblestyle.js">
            
        </script> */}
        </div>
        </div>
    }
    {
        filterKey==='Des'&&
        <div className={styles.filterSetting}>
            <div className='selectArea'>
            <input type="radio"/> is contain
            </div>
           
        <div className='datePicker'>
        <input type="text" />
        </div>
        <div className='btnArea'>
        
        </div>
        <div className='selectArea'>
            <input type="radio"/> is not contain
            </div>
           
        <div className='datePicker'>
        <input type="text" />
        </div>
        <div className='btnArea'>
        <button className='cancelBtn'  onClick={handleCancel}>Cancel</button>
        <button className='applyBtn'>Apply Filter</button>
        <script src="bubblestyle.js">
            
        </script>
        </div>
        </div>
    }
        
       
        </div>
        
<div className='grid'>
<div className='gridRowTitle'>
        <li className='tile'>Date</li>
        <li className='tile'>Time</li>
        <li className='tile'>Type</li>
        <li className='tile'>Description</li>
            
        </div>
        <div className='gridRowContent'>
        <li className='tile'>2022-11-06</li>
        <li className='tile'>21:09:11</li>
        <li className='tile'>AX</li>
        <li className='tile'>Start</li>
            
        </div>
        <div className='gridRowContent'>
        <li className='tile'>2022-11-06</li>
        <li className='tile'>21:09:11</li>
        <li className='tile'>Start</li>
        <li className='tile'>Start</li>
            
        </div>
        <div className='gridRowContent'>
        <li className='tile'>2022-11-06</li>
        <li className='tile'>21:09:11</li>
        <li className='tile'>AX</li>
        <li className='tile'>Start</li>
            
        </div>
        <div className='gridRowContent'>
        <li className='tile'>2022-11-06</li>
        <li className='tile'>21:09:11</li>
        <li className='tile'>AX</li>
        <li className='tile'>Start</li>
            
        </div>
        <div className='gridRowContent'>
        <li className='tile'>2022-11-06</li>
        <li className='tile'>21:09:11</li>
        <li className='tile'>AX</li>
        <li className='tile'>Start</li>
            
        </div>
</div>
<div class="ring_loader">
    {/* <div className='ring_loader_txt'> */}
    loading
    {/* </div> */}
  
  {/* <span></span> */}
</div>

        </div>}

    <Charts menuOpen={menuOpen} setMenu={setMenu}/>
    </>
        
    );
}