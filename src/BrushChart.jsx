import React from 'react';
import styles from "./Chart.module.css";
import Chart from "react-apexcharts";
export default function BrushChart({menuOpen,setMenu}) {
   const state = {
          
        series: [{
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            id: 'onezzang',
            type: 'line',
            height: 230,
            toolbar: {
              autoSelected: 'pan',
              show: false
            }
          },
          colors: ['#546E7A'],
          stroke: {
            width: 3
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 1,
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          }
        },
      
        seriesLine: [{
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        optionsLine: {
          chart: {
            id: 'chart1',
            height: 130,
            type: 'area',
            brush:{
              target: 'onezzang',
              enabled: true
            },
            selection: {
              enabled: true,
              xaxis: {
                min: new Date('19 Jun 2017').getTime(),
                max: new Date('14 Aug 2017').getTime()
              }
            },
          },
          colors: ['#008FFB'],
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.91,
              opacityTo: 0.1,
            }
          },
          xaxis: {
            type: 'datetime',
            tooltip: {
              enabled: false
            }
          },
          yaxis: {
            tickAmount: 2
          }
        },
      
      
      };



    return (<div className={menuOpen?styles.open:styles.brushChart}>
         <div className={styles.title}>
        <div className={styles.titleName}>
       Brush Chart
        </div>
        <div className={styles.chip}>30</div></div>
    <div className={styles.brushArea}>
    <Chart 
    options={state.options} 
    series={state.series} 
    type="line" 
    height='50%' />

        <Chart 
        options={state.optionsLine} 
        series={state.seriesLine} 
        type="area" 
        height='50%' />


    </div>
    </div>
       
    );
}