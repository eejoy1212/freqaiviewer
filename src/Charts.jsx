import React from 'react';
import AlgorithmChart from './AlgorithmChart';
import BrushChart from './BrushChart';

export default function Charts({menuOpen,setMenu}) {
    console.log(`in Charts 오픈? ${menuOpen}`);
    return (
        <>
            <div className='algorithmChartArea'>
      <AlgorithmChart menuOpen={menuOpen} setMenu={setMenu}/>
      </div>
      <div className='brushChartArea'>
      <BrushChart menuOpen={menuOpen} setMenu={setMenu}/>
      </div> 
      <div className='algorithmChartArea'>
      <AlgorithmChart menuOpen={menuOpen} setMenu={setMenu}/>
      </div>
      <div className='brushChartArea'>
      <BrushChart menuOpen={menuOpen} setMenu={setMenu}/>
      </div> 
        </>
    );
}
